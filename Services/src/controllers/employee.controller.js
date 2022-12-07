const { json }  = require('express');
const { findAll } = require('../gateways/employee.gateway');

const {database} = require ('../utils/database.js');
const { validateError } = require('../utils/functions.js');

const getEmpleados = async(req,res=response) => {
    try{
        const result= await findAll();
        res.status(200).json(result)
    }catch(err){
        console.log(err);
        const message=validateError(err);
        res.status(400).json({message});
    }
    /*const result = await database.query(`SELECT * FROM employee`,[])
    res.status(200).json(result)
    */
}
const getEmpleadoById = async (req,res) => {
    const [rows] = await database.query('SELECT * FROM employee WHERE id = ?;',[req.params.id])
    if(rows.length <= 0){
        res.status(404),json({message:'No encontre a su empleado'})
    }
   res.json(rows[0]) 
}

const getEmpleadoByname = async (req,res) => {
    const [rows] = await database.query('SELECT * FROM employee WHERE name = ?;', [req.params.name])
    if(rows.length <= 0){
        res.status(404),json({message:'No encontre a su empleado'})
    }
    res.json(rows[0])
}


const createEmpleado = async(req,res) => {
    const {username,password,name,age,phone_number,gender} = req.body
    const [rows] = await database.query('INSERT INTO employee (username,password,name,age,phone_number,gender) VALUES (?,?,?,?,?,?)',[username,password,name,age,phone_number,gender])
    res.send("El usuario a sido creado Exitosamente Tenga un buen dia");
}

const UpdateEmpleado = async(req,res) => {
    const {id} = req.params
    const {username,password,name,age,phone_number,gender,state} = req.body
    const [result] = await database.query('UPDATE employee SET username=?,password=?,name=?,age=?,phone_number=?,gender=?,state=? WHERE id = ?;',
    [username,password,name,age,phone_number,gender,state,id])
    if(result.affectedRows === 0){
        res.status(404),json({message:'No encontre a su empleado'})
    }
    const [personal] = ('SELECT * FROM employee WHERE id=?;',[id])
    res.send("Actualizacion del Emplead@ Correcta")
    res.json(personal)
};

module.exports={
    getEmpleados,
    getEmpleadoById,
    getEmpleadoByname,
    createEmpleado,
    UpdateEmpleado
}