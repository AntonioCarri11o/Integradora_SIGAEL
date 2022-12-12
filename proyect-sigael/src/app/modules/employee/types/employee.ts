import {Entity} from "../../../types/entity";

export type Employee=Entity<number>&{
    id:number,
    username:string,
    password:string,
    name:string,
    age:number|null,
    phone_number:string,
    gender:string,
    state:string,
    role:string
}