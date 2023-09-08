import { pool } from '../db.js'


export const getDespachadores = (req,res) => res.send('Obteniendo Despachador')
export const createDespachadores = async(req,res) => {
    const {identificacion, nombre, email, contrasena, usuario, fecha_de_creacion} = req.body
    const [rows] = await pool.query('INSERT INTO despachadores (identificacion, nombre, email, contrasena, usuario, fecha_de_creacion) VALUE (?, ?, ?, ?, ?, ?)' , [identificacion, nombre, email, contrasena, usuario, fecha_de_creacion,])
    res.send({ rows })
}

export const updateDespachadores = (req,res) => res.send('Actualizando Despachadores')
export const deleteDespachadores = (req,res) => res.send('Borrando Despachadores')




