import { json } from 'express'
import { pool } from '../db.js'

export const getConductores =async (req, res) => {
    try{
        throw new Error('Mi error')
        const [rows] = await pool.query('SELECT * FROM conductores')
    res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'Algo va mal'
        })
    }
}

export const getConductor = async(req, res) => {
    try {
        const [rows] =await pool.query('SELECT * FROM conductores WHERE     id_conductores = ?', [req.params.id]);
    
    
        if(rows.length <= 0) return res.status(404).json({
            message: 'Conductor no encontrado'
            });
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
        message: "Algo va mal"
        })
    }

}


export const createConductores = async (req, res) => {
    const { identificacion, placa_vehiculo, nombre, apellido, vehiculo_asociado, empresa, fecha_de_ingreso } = req.body;
    const [rows] = await pool.query('INSERT INTO conductores (identificacion, placa_vehiculo, nombre, apellido, vehiculo_asociado, empresa, fecha_de_ingreso) VALUES (?, ?, ?, ?, ?, ?, ?)', [identificacion, placa_vehiculo, nombre, apellido, vehiculo_asociado, empresa, fecha_de_ingreso])
    res.send({
        id: rows.insertId,
        identificacion, 
        placa_vehiculo,
        nombre, 
        apellido, 
        vehiculo_asociado,
        empresa, 
        fecha_de_ingreso
    })
}



export const updateConductores = (req, res) => res.send('Actualizando Conductores')

export const updateConductor = async (req,res) => {
    const {id}= req.params;
    const{
    identificacion,
    placa_vehiculo, 
    nombre, apellido, 
    vehiculo_asociado, 
    empresa, 
    fecha_de_ingreso
} = req.body;

const [result] = await pool.query('UPDATE conductores SET identificacion = IFNULL(?, identificacion),  placa_vehiculo = IFNULL(?, placa_vehiculo ), nombre = IFNULL(?, nombre), apellido = IFNULL(?, apellido), vehiculo_asociado = IFNULL(?, vehiculo_asociado), empresa = IFNULL(?, empresa), fecha_de_ingreso = IFNULL(?, fecha_de_ingreso)',[
identificacion, placa_vehiculo,nombre, apellido, vehiculo_asociado, empresa,fecha_de_ingreso, id])

if (result.affectedRows === 0) return res.status(404),json({
        message: 'Conductor no encontrado'
})

const [rows] = await pool.query('SELECT * FROM conductores WHERE id_conductores = ?',[id])

res.json(rows[0])
}


export const deleteConductores = (req, res) => res.send('Borrando Conductores')


export const deleteConductor = async(req, res) => {
    const [result] = await pool.query('DELETE FROM conductores WHERE id_conductores = ?' , [req.params.id])
    
    if (result.affectedRows <= 0) return res.status(404).json({
        message: 'Conductor no encontrado'
    })

    res.sendStatus(204)

}