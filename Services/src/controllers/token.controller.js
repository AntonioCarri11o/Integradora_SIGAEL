const getUserToken=async(req,res)=>{
    res.send(req.token.username)
}
const getRoleToken=async(req,res)=>{
    const role=req.token.role
    res.send({role})
}
module.exports={
    getUserToken,
    getRoleToken
}