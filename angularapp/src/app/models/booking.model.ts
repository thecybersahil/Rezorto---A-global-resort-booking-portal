import { Resort } from "./resort.model";
import { User } from "./user.model";

export interface Booking {

    bookingId?:number;
    noOfpersons?:number;
    status?:string;
    totalPrice?:number;
    address?:string;
    fromDate?:Date;
    toDate?:Date;
    user?:User;
    resort?:Resort

}
