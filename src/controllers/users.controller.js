import { pool } from '../db.js'

export const getUsers = async (req,res) =>  {
    const [rows] = await pool.query('SELECT * FROM users')
    res.json(rows)

}

export const getUser = async (req,res) =>  {
    const [rows] = await pool.query('SELECT * FROM users WHERE id_user =?', [req.params.id])
    console.log(rows)
    res.send('Obteniendo Ruta')

}
export const createUsers = async (req, res) => {
    const {username, second_name, email, celular, fk_id_conductores, clase_pqrs, comentario, fecha_pqrs } = req.body
    const [rows] = await pool.query('INSERT INTO users (username, second_name, email, celular, fk_id_conductores, clase_pqrs, comentario, fecha_pqrs) VALUE (?, ?, ?, ?, ?, ?, ?, ?)' , [username, second_name, email, celular, fk_id_conductores, clase_pqrs, comentario, fecha_pqrs]) 
    res.send({
    id: rows.insertId,
    username, 
    second_name, 
    email, 
    celular,
    fk_id_conductores,
    clase_pqrs,
    comentario,
    fecha_pqrs
})


}    

export const updateUsers = (req,res) => res.send('Actualizando Requerimiento')

export const deleteUsers = (req,res) => res.send('Borrando Requerimiento')