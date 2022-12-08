const { Router } = require("express");
const { getUserToken } = require("../controllers/token.controller");

const routerToken=Router();
routerToken.get('/token/',[auth],getUserToken)

module.exports={
    routerToken,
}
