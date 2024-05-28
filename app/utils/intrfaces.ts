import * as yup from "yup"

export interface sessionData {
	id: string;
	username: string;
	verified: boolean;
	role: string[];
}

export type ProfileInfo = {
	username: string;
	email: string;
	role: string;
	id: string;
	Avatar: string;
	thumbnail?: string;
};
export interface ProfileInfoProps {
	user: ProfileInfo;
}

export interface authorData {
	id: string;
	username: string;
}

export const articleSchema = yup.object({
	_id: yup.string(),
	id: yup.string(),
    title: yup.string().required(),
    author: yup.string().required(),
    category: yup.string().required(),
    content: yup.string().required(),
    publishedAt: yup.string().required(),
    img: yup.string(),
    featured: yup.boolean()
  });

export interface Article extends yup.InferType<typeof articleSchema> {}