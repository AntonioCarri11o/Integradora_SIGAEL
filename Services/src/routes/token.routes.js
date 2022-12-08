const { Router } = require("express");
const { auth } = require("../config/jwt");
const { getUserToken } = require("../controllers/token.controller");

const routerToken=Router();
routerToken.get('/token/',[auth],getUserToken)


module.exports={
    routerToken,
}
