const {query}=require('../utils/database');
const { hashPassword } = require('../utils/functions');

const findAll=async()=>{
    const sql="SELECT * from employee"
    const result=await query(sql,[]);
    return result;
}
module.exports={
    findAll,
}