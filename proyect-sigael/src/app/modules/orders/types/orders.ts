import {Entity} from "../../../types/entity";

export type Order=Entity<number>&{
    id:number,
    name:string,
    description:string,
    pieces:number,
    prize:number,
    total:number,
    r_date:string,
    g_date:string,
    status:string,
    folio:number,
    balance:number,
    comments:string,
    id_customer:number,
    idr_employee:number,
    idg_employee:number

}