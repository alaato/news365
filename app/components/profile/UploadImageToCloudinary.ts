'use server'
import { v2 as cloudinary } from 'cloudinary'
import User from "@/app/models/userModel";
import { revalidatePath } from 'next/cache'

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY ,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

type CloudResponse = {
  asset_id: string,
  public_id: string,
  version: number,
  version_id: string,
  signature: string,
  width: number,
  height: number,
  format: string,
  resource_type: string,
  created_at: string,
  tags: Array<string>,
  bytes: number,
  type: string,
  etag: string,
  placeholder: Boolean,
  url: string,
  secure_url: string,
  folder:string,
  original_filename: string,
  api_key: string
}
export async function UploadImageToCloudinary (formData: FormData): Promise<String> {
  const file = formData.get('Avatar') as File;
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);
  const image:CloudResponse=  await new Promise((resolve, reject)=>{
    cloudinary.uploader.upload_stream({}, function (error, result) {
      if (error) {
        reject(error);
        console.log(error);
        return;
      }
      resolve(result as any as CloudResponse);
    })
    .end(buffer)
  });
  console.log(image)
  return image.url;
}

export async function SaveAvatarInDatabase(image: String, id:string )
{
  try {
    const user = await User.findById(id);
    if(!user)
      throw new Error
    user.avatar = image;
    user.save();
  } catch (error) {
    console.log(error);
  }finally{
    revalidatePath('/profile')
  }
}