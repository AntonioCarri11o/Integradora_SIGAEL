const {query}=require('../utils/database');

const findAll=async()=>{
    const sql="SELECT * from employee"
    const result=await query(sql,[]);
    return result;
}
module.exports={
    findAll
}