import { Entity } from "src/app/types/entity";

export type Customer=Entity<number>&{
    id:number,
    name:string,
    type:string,
    phone_number:number,
    address:string,
    balance:string
}