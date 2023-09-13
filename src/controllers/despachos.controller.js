import { pool } from '../db.js'

export const getDespachos = (req,res) => res.send('Odteniendo Despachos')
export const createDespachos = async(req,res) => {
    const{hora_salida, ruta, origen, destino, fk_id_conductor, fk_id_despachador, fecha_hora_de_creacion} = req.body;
    const [rows] = await pool.query('INSERT INTO despachos (hora_salida, ruta, origen, destino, fk_id_conductor, fk_id_despachador, fecha_hora_de_creacion) VALUE (?, ?, ?, ?, ?, ?, ?)' , [hora_salida, ruta, origen, destino, fk_id_conductor, fk_id_despachador, fecha_hora_de_creacion])
    res.send({ 
    id: rows.insertId,
    hora_salida,
    ruta,
    origen,
    destino,
    fk_id_conductor,
    fk_id_despachador,
    fecha_hora_de_creacion
  })
}

export const updateDespachos = (req,res) => res.send('Actualizando Despachos')
export const deleteDespachos = (req,res) => res.send('Borrando Despachos')