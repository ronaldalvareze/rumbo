import { pool } from '../db.js'


export const getDespachadores = async(req,res) => {
    const [rows] = await pool.query('SELECT * FROM despachadores')
    res.json(rows)
}   


export const getDespachador = async(req, res) => {
    const [rows] =await pool.query('SELECT * FROM despachadores WHERE id_login = ?' , [req.params.id])
    
    
    if(rows.length <= 0) return res.status(404).json({
        message: 'Conductor no encontrado'
    })
    res.json(rows[0])
}


    
//crear despa
export const createDespachadores = async (req,res) => {
    const {identificacion, nombre, email, contrasena, usuario, fecha_de_creacion} = req.body
    const [rows] = await pool.query('INSERT INTO despachadores (identificacion, nombre, email, contrasena, usuario, fecha_de_creacion) VALUE (?, ?, ?, ?, ?, ?)' , [identificacion, nombre, email, contrasena, usuario, fecha_de_creacion])
    res.send({
        id: rows.insertId,
        identificacion,
        nombre,
        email,
        contrasena,
        usuario,
        fecha_de_creacion
     })
}
// actualizar despachadores
export const updateDespachadores = (req,res) => res.send('Actualizando Despachadores')


export const updateDespachador = (req,res) => {
    const {id_login} = req.params
    const {identificacion, nombre, email, contrasena, usuario, fecha_de_creacion} = req.body
    console.log(identificacion, nombre, email, contrasena, usuario, fecha_de_creacion);
    res.json('Resivido')
}









// delete despachadores
export const deleteDespachadores = (req, res) => res.send('Actualizando Conductores')


export const deleteDespachador = async(req, res) => {
    const [result] = await pool.query('DELETE FROM despachadores WHERE id_login = ?' , [req.params.id])
    
    if (result.affectedRows <= 0) return res.status(404).json({
        message: 'Despachador no encontrado'
    })

    res.sendStatus(204)

}




