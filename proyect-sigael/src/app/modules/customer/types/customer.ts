import { Entity } from "src/app/types/entity";

export type Customer=Entity<number>&{
    id:number|null,
    name:string,
    type:string,
    phone_number:number|null,
    address:string,
    balance:string
}