import { pool } from '../db.js'

export const getUsers = async (req,res) =>  {
    const [rows] = await pool.query('SELECT * FROM users')
    res.json(rows)

}

export const getUser = async (req,res) => {
    const [rows] = await pool.query('SELECT * FROM users WHERE id_user = ?',[req.params.id])
    
    if(rows.length <= 0) return res.status(404).json({
        message: 'Usuario no encontrado'
    })
    
    res.json(rows[0])
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

export const updateUser = async(req,res) => {
    const {id} = req.params
    const {username, second_name, email, celular, fk_id_conductores, clase_pqrs, comentario, fecha_pqrs} = req.body

    const [result] = await pool.query ('UPDATE users SET username = ?, second_name = ?, email = ?, celular = ?, fk_id_conductores = ?, clase_pqrs = ?,  comentario = ?,  fecha_pqrs = ?', [username,  second_name,  email,  celular,  fk_id_conductores, clase_pqrs, comentario, fecha_pqrs])

    if (result.affectedRows === 0) return res.status(404),json({
        message: 'pqrs no encontrado'
})
console.log(result)

res.json('Resivido')
}


export const deleteUsers = (req,res) => res.send('Borrando Requerimiento')

export const deleteUser = async (req,res) => {
    const [result ] = await pool.query('DELETE FROM users WHERE id_user = ?', [req.params.id])
    if(result.affectedRows <= 0) return res.status(404).json({
        message: 'usuario no encontrado'
    })

    res.sendStatus(204)
}