'use client'
import styles from "./upload.module.css"
import { useState } from 'react';
import { Avatar } from '@mui/joy';
import AspectRatio from '@mui/joy/AspectRatio';
import { forwardRef } from 'react';

const uploadImage = forwardRef(function MyInput(props:{register:Function}, ref){
    const [image, setImage] = useState(null);
    const {register} = props

    const SetAvatarImage = (e)=>{
        const image = e.target.files[0];
        if(image)
        {
            const objectURL = window.URL.createObjectURL(image);
            setImage(objectURL);
        }
    }

  return (
    <label className={styles.uploadButton}>
         <AspectRatio
            ratio="1"
            maxHeight={120}
            sx={{ flex: 1,maxWidth:{xs:60},  minWidth:120, borderRadius: '100%', border: '1px solid'}}
          >
                <Avatar src={image} />
          </AspectRatio>
      <input {...register("Avatar")} onChange={SetAvatarImage} className={styles.hiddenInput}  type="file" accept="image/png, image/jpeg"/>
    </label>
  );
  
}
)
export default uploadImage