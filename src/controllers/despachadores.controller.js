import { pool } from '../db.js'


export const getDespachadores = (req,res) => res.send('Obteniendo Despachador')
export const createDespachadores = async (req,res) => {
    const {identificacion, nombre, email, contrasena, usuario} = req.body
    const[rows] = await pool.query('INSERT INTO despachador (identificacion, nombre, email, contrasena, usuario) VALUES(?, ?, ?, ?, ?)', [identificacion, nombre, email, contrasena, usuario])
    res.send({ rows })
}

export const updateDespachadores = (req,res) => res.send('Actualizando Despachadores')
export const deleteDespachadores = (req,res) => res.send('Borrando Despachadores')

