import { pool } from '../db.js'

export const getConductores =async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM conductores')
    res.json(rows)
}


export const getConductor = async(req, res) => {
    const [rows] =await pool.query('SELECT * FROM conductores WHERE id_conductores = ?', [req.params.id])
    
    
    if(rows.length <= 0) return res.status(404).json({
        message: 'Conductor no encontrado'
    })
    res.json(rows[0])
}

export const createConductores = async (req, res) => {
    const { identificacion, placa_vehiculo, nombre, apellido, vehiculo_asociado, empresa, fecha_de_ingreso } = req.body;
    const [rows] = await pool.query('INSERT INTO conductores (identificacion, placa_vehiculo, nombre, apellido, vehiculo_asociado, empresa, fecha_de_ingreso) VALUE (?, ?, ?, ?, ?, ?, ?)', [identificacion, placa_vehiculo, nombre, apellido, vehiculo_asociado, empresa, fecha_de_ingreso])
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

export const deleteConductores = (req, res) => res.send('Actualizando Conductores')


export const deleteConductor = async(req, res) => {
    const [rows] = await pool.query('DELETE FROM conductores WHERE id_conductores = ?' , [req.params.id])
    console.log(rows);
    res.send('Conductor Eliminado')

}