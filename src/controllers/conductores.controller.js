import { pool } from '../db.js';

export const getConductores = (req,res) => res.send('Odteniendo Conductores')
export const createConductores = async(req,res) => {
    const{identificacion, placa_vehiculo, nombre, apellido, vehiculo_asociado, empresa, fecha_de_ingreso} = req.body;
    const [rows] = await pool.query('INSERT INTO conductores (identificacion, placa_vehiculo, nombre, apellido, vehiculo_asociado, empresa, fecha_de_ingreso) VALUE (?, ?, ?, ?, ?, ?, ?)' [identificacion, placa_vehiculo, nombre, apellido, vehiculo_asociado, empresa, fecha_de_ingreso])
    res.send({ rows })
}

export const updateConductores = (req,res) => res.send('Actualizando Conductores')
export const deleteConductores = (req,res) => res.send('Borrando Conductores')