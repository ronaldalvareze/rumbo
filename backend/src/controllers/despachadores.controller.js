import { json } from 'express';
import { pool } from '../db.js';

export const getDespachadores = async (req, res) => {
    
    try {
        const [rows] = await pool.query('SELECT * FROM despachadores');
        res.json(rows);
      } catch (error) {
        console.error(error);
        return res.status(500).json({
          message: 'Algo va mal',
        })
    }
}   


export const getDespachador = async (req, res) => {
    try {
        const [rows] =await pool.query('SELECT * FROM despachadores WHERE id_login = ?' , [req.params.id])
    
    
        if(rows.length <= 0) return res.status(404).json({
            message: 'Conductor no encontrado'
        })
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
        message: "Algo va mal"
        });
    }

};


    
//crear despachadores
export const createDespachadores = async (req,res) => {
    try {
        const {identificacion, nombre, email, contrasena, usuario, fecha_de_creacion} = req.body
        const [rows] = await pool.query('INSERT INTO despachadores (identificacion, nombre, email, contrasena, usuario, fecha_de_creacion) VALUES (?, ?, ?, ?, ?, ?)' , [identificacion, nombre, email, contrasena, usuario, fecha_de_creacion])
        res.send({
            id: rows.insertId,
            identificacion,
            nombre,
            email,
            contrasena,
            usuario,
            fecha_de_creacion
        });
    } catch (error) {
        return res.status(500).json({
            message: "Algo va mal",
        })
    }

}
// actualizar despachadores
export const updateDespachadores = (req,res) => res.send('Actualizando Despachadores')

export const updateDespachador = async (req,res) => {
    try {
            const {id}= req.params
            const{
            identificacion,
            nombre,
            email,
            contrasena,
            usuario,
            fecha_de_creacion
        } = req.body
    

            const [result] = await pool.query('UPDATE despachadores SET identificacion = IFNULL(?, identificacion), nombre =IFNULL(?, nombre),  email =IFNULL(?, email), contrasena =IFNULL(?, contrasena), usuario =IFNULL(?, usuario), fecha_de_creacion =IFNULL(?, fecha_de_creacion)', [identificacion, nombre, email, contrasena, usuario, fecha_de_creacion, id])

            if(result.affectedRows === 0 ) return res.status(404).json({
                message: 'Despachador no encontrado'
            })
            const [rows] = await pool.query('SELECT * FROM consductores WHERE id_conductores = ?',[id])

            res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: "Algo va mal"
        })
    }
}









// delete despachadores
export const deleteDespachadores = (req, res) => res.send('Actualizando Conductores')


export const deleteDespachador = async(req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM despachadores WHERE id_login = ?' , [req.params.id])
    
        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Despachador no encontrado'
        })

        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: "Algo va mal",
        })
    }

}




