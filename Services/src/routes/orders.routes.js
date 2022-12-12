const{Router} = require ("express");
const {getPedidos,getPedidosByname,getPedidosById, UpdatePedido, createPedidos, UpdateState} = require ('../controllers/orders.controller.js');
const { auth, checkRoles } = require("../config/jwt.js");
const routerOrders = Router();

routerOrders.get('/ordenes/',getPedidos);
routerOrders.get('/ordenes/:id',getPedidosById);
routerOrders.get('/ordenes/orden/:name',getPedidosByname);
routerOrders.post('/ordenes/',[auth,checkRoles(['empleado'])],createPedidos);
routerOrders.put('/ordenes/',UpdatePedido);
routerOrders.put('/ordenes/upState',UpdateState);

module.exports={
    routerOrders
}