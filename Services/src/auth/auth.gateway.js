const {query} = require ('../utils/database.js');
const { generateToken } = require ('../config/jwt.js');
const { validatePassword } = require ('../utils/functions.js');
const {response} = require('express');

//Empleados
const login = async(user,res = response) => {
    if(!user.username || !user.password) throw Error('Missing Fields'); //<-- valida que la contra y el usuario no vayan vacios
    const sql = 'SELECT * FROM employee WHERE username=? and state=\'a\';' // <-- Query para validar que existe
    const existEmployee = await query(sql,[user.username]); // <-- Manda nuestro Query y los parametros  

    if(validatePassword(user.password,existEmployee[0].password)) // <-- Valida que las contraseñas encajen 
    return generateToken({ // <-- aqui regresa un token para nuestra session 
    id:existEmployee[0].id,
    username: user.username,
    role: existEmployee[0].role,
    isLogget:true,
    });
    console.log(role)
    if(!validatePassword(user.password,existEmployee[0].password))
    return
};

//Admin
const login_Admin = async(admin,res = response) => {
    if(!admin.password) throw Error('Missing Fields'); //<-- valida que la contra y el usuario no vayan vacios
    const sql = 'SELECT * FROM admin WHERE password=?;' // <-- Query para validar que existe
    const existAdmin = await query(sql,[admin.password]); // <-- Manda nuestro Query y los parametros  
    if(validatePassword(admin.password,existAdmin[0].password)); // <-- Valida que las contraseñas encajen 
    return generateToken({ // <-- aqui regresa un token para nuestra session 
    id:existAdmin[0].id,
    role: existAdmin[0].role,
    isLogget:true,
    }); throw Error('Password mismatch');
};


module.exports={
    login,
    //login_Admin,
}