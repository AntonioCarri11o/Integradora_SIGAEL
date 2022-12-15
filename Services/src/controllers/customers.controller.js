const { json } = require ('express');
const {database} = require ('../utils/database.js');

const getClientes = async(req,res) => {
    const [result] = await database.query('SELECT * FROM customer')
    res.json(result);
};
const getClienteById = async (req,res) => {
    const [rows] = await database.query('SELECT * FROM customer WHERE id = ?;',[req.params.id])
    if(rows.length <= 0){
        res.status(404),json({message:'No encuentro registro de un Cliente Por favor de consultar con un Gerente'})
    }
   res.json(rows[0]) 
};
const getClientesByType = async (req,res)=>{
    const type=req.body
    const [result]=await database.query("SELECT * from customer where type=?;",[type.type])
    res.json(result)
};
const getClienteByname = async (req,res) => {
    const [rows] = await database.query('SELECT * FROM customer WHERE name = ?;',[req.params.name])
    if(rows.length <= 0){
        res.status(404),json({message:'No encuentro registro de un Cliente Por favor de consultar con un Gerente'})
    }
   res.json(rows[0]) 
};
const validateId=async(req,res)=>{
    const id=req.body
    const [rows]=await database.query('SELECT id FROM customer where  id=?;',[id.id])
    res.json(rows.length)
}
const createTemporal=async(req,res)=>{

}

const createCliente = async(req,res) => {
    const {name,type,phone_number,address,balance} = req.body
    const [rows] = await database.query('INSERT INTO customer (name,type,phone_number,address,balance) VALUES (?,?,?,?,?)',[name,type,phone_number,address,balance])
    const message="!!Cliente Registrado de manera Exitosa!!"
    res.json({message})
};

const UpdateCliente = async(req,res) => {
    const {id,name,type,phone_number,address,balance} = req.body
    const [result] = await database.query('UPDATE customer SET name=?, type=? ,phone_number=?, address=?, balance=? WHERE id = ?;',
    [name,type,phone_number,address,balance,id])
    if(result.affectedRows === 0){
        res.status(404),json({message:'No encontre a su empleado'})
    }
    const [personal] = ('SELECT * FROM employee WHERE id=?;',[id])
    const message="Actualizacion del Cliente Correcta Tenga un Buen Dia <3";
    res.json({message})
};

const DeleteCliente = async(req,res) => {
};

module.exports={
    getClientes,
    getClienteById,
    getClienteByname,
    createCliente,
    UpdateCliente,
    DeleteCliente,
    getClientesByType,
    validateId
}