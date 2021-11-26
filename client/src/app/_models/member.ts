import { Photo } from "./Photo";

export interface Member {
  id: number;
  userName: string;
  age: number;
  knownAs: string  ;
  photoUrl: string;
  created: Date;
  lastActive: Date;
  gender: string;
  introduction: string;
  lookingFor: string;
  interests:string;
  city: string;
  myProperty: string;
  country: string;
  photos: Photo[];
}
