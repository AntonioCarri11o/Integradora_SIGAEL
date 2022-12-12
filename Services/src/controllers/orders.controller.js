const { json } = require ('express');
const {database} = require ('../utils/database.js');

const getPedidos = async(req,res=Response) => {
    const [rows] = await database.query('SELECT ord.*, emp.username as r_employee, gemp.username as g_employee, cus.name as customer,cus.phone_number FROM orders ord inner JOIN employee emp on ord.idr_employee=emp.id JOIN employee gemp on ord.idg_employee=gemp.id Join customer cus on ord.id_customer=cus.id;')
    res.json(rows)
}
const getPedidosById = async (req,res) => {
    const [rows] = await database.query('SELECT * FROM orders WHERE id = ?;',[req.params.id])
    if(rows.length <= 0){
        res.status(404),json({message:'No encontre su pedido por favor de consultar con un gerente'})
    }
   res.json(rows[0]) 
}

const getPedidosByname = async (req,res) => {
    const [rows] = await database.query('SELECT * FROM orders WHERE name = ?;', [req.params.name])
    if(rows.length <= 0){
        res.status(404),json({message:'No encontre su pedido por favor de consultar con un gerente'})
    }
    res.json(rows[0])
}


const createPedidos = async(req,res) => {
    const {name,description,pieces,prize,total,r_date,status,balance,comments,id_customer,idr_employee} = req.body
    const calculo = (total-balance);
    const [rows] = await database.query('INSERT INTO orders (name,description,pieces,prize,total,r_date,status,balance,comments,id_customer,idr_employee) VALUES (?,?,?,?,?,?,?,?,?,?,?)',[name,description,pieces,prize,calculo,r_date,status,balance,comments,id_customer,idr_employee])
    res.send("Su pedido a sido creado Exitosamente Tenga un buen dia");
}

const UpdatePedido = async(req,res) => {
    const {id,name,description,pieces,prize,total,status,balance,comments,id_customer,idr_employee,customer,phone_number} = req.body
    const calculo = (total-balance);
    const [result] = await database.query('UPDATE orders SET name=?,description=?,pieces=?,prize=?,total=?,balance=?,comments=?,id_customer=?,idr_employee=? WHERE id = ?;',[name,description,pieces,prize,calculo,balance,comments,id_customer,idr_employee,id])
    if(result.affectedRows === 0){
        res.status(404),json({message:'No encontre su pedido por favor llamar a un Gerente'})
    }else{
        const [res]=await database.query('UPDATE customer set name=?,phone_number=? where id=?',[customer,phone_number,id_customer])
    }
    const message="Actualizacion del Pedido Correcta";
    res.json({message})
};

const DeletePedido = async(req,res) => {
    const [rows] = await database.query('DELETE FROM orders WHERE id = ?;',[req.params.id])
    if(rows.length <= 0){
        res.status(404),json({message:'No encontre a su empleado'})
    }
    res.send("Eliminacion de Pedido Correcta")
   res.json(rows[0])
};

module.exports={
    getPedidos,
    getPedidosById,
    getPedidosByname,
    createPedidos,
    UpdatePedido
}