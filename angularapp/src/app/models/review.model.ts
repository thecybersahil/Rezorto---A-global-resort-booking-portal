import { User } from "./user.model";

export interface Review {
    userId?:number;
    body:string;
    rating:number;
    subject:string;
    user?:User;
    dateCreated?:Date;
    // resortName:string;
    // feedback:string;
}
