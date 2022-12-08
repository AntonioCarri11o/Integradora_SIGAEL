const getUserToken=async(req,res)=>{
    res.send(req.token.username)
}
module.exports={
    getUserToken
}