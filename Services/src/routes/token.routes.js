const { Router } = require("express");
const { auth } = require("../config/jwt");
const { getUserToken, getRoleToken } = require("../controllers/token.controller");

const routerToken=Router();
routerToken.get('/token/getUserToken',[auth],getUserToken)
routerToken.get('/token/getRoleToken',[auth],getRoleToken)

module.exports={
    routerToken,
}
