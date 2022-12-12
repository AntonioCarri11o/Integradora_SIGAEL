import {Entity} from "../../../types/entity";

export type Order=Entity<number>&{
    id:number|null,
    name:string,
    description:string,
    pieces:number|null,
    prize:number|null,
    total:number|null,
    r_date:string|null,
    g_date:string|null,
    status:string|null,
    folio:number|null,
    balance:number|null,
    comments:string|null,
    id_customer:number|null,
    idr_employee:number,
    idg_employee:number|null,
    phone_number:number,

    remployee:string|null,
    g_employee:string|null,
    customer:string|null


}