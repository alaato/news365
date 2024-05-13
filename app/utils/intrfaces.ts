export interface sessionData {
    id: string,
    username : string,
    verified : boolean,
    role : string[],
}

export type ProfileInfo = {
    username: string,
    email: string,
    role: string,
    id: string
    Avatar: string
  };
export interface ProfileInfoProps {
    user: ProfileInfo,
  }