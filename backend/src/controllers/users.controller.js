import { json } from 'express'
import { pool } from '../db.js'

export const getUsers = async (req, res) => {
  try {
    //throw new Error('mi error')
    const [rows] = await pool.query('SELECT * FROM users');
    res.json(rows);
  } catch (error) {
     return res.status(500).json({
     message: 'ALGA VA MAL', 
    });
  }
};



export const getUser = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM users WHERE id_user = ?', [req.params.id]);

    if (rows.length <= 0) {
      return res.status(404).json({
        message: 'Usuario no encontrado',
      });
    }

    res.json(rows[0]);
  } catch (error) {
         return res.status(500).json({
         message: 'algo va mal', 
     });
  }
};


export const createUsers = async (req, res) => {
  try {
    const {username,second_name,email,celular,fk_id_conductores,clase_pqrs,comentario,fecha_pqrs,} = req.body;

    const [rows] = await pool.query(
      'INSERT INTO users (username, second_name, email, celular, fk_id_conductores, clase_pqrs, comentario, fecha_pqrs) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [username, second_name, email, celular, fk_id_conductores, clase_pqrs, comentario, fecha_pqrs]
    );
    res.send({
      id: rows.insertId,
      username,
      second_name,
      email,
      celular,
      fk_id_conductores,
      clase_pqrs,
      comentario,
      fecha_pqrs,
    });
  } catch (error) {
    return res.status(500).json({
         message: 'ALGO VA MAL', 
});
  }
};



export const updateUsers = (req, res) => res.send('Actualizando Requerimiento');

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const {username,second_name,email,celular,fk_id_conductores,clase_pqrs,comentario,fecha_pqrs,} = req.body;

    const [result] = await pool.query(
      'UPDATE users SET username = IFNULL(?, username), second_name = IFNULL(?, second_name), email = IFNULL(?, email), celular = IFNULL(?, celular), fk_id_conductores = IFNULL(?, fk_id_conductores), clase_pqrs = IFNULL(?, clase_pqrs), comentario = IFNULL(?, comentario), fecha_pqrs = IFNULL(?, fecha_pqrs) WHERE id_user = ?',
      [username, second_name, email, celular, fk_id_conductores, clase_pqrs, comentario, fecha_pqrs, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: 'PQRS no encontrado',
      });
    }

    const [rows] = await pool.query('SELECT * FROM users WHERE id_user = ?', [
        id,
    ]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
         message: 'algo va mal' 
        });
    }
};

export const deleteUsers = (req, res) => res.send('Borrando Requerimiento');

export const deleteUser = async (req, res) => {
  try {

    const [result] = await pool.query("DELETE FROM users WHERE id_user = ?", [
       req.params.id, 
    ]);


    if (result.affectedRows <= 0) {
      return res.status(404).json({
        message: 'Usuario no encontrado',
      });
    }

   
    res.sendStatus(204);
  } catch (error) {
       return res.status(500).json({ 
        message: 'algo va mal' 
    });
  }
};