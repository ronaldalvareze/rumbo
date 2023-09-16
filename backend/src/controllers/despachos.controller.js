export const getDespachos = async (req, res) => {
  try {
    throw new Error('mi error')
    const [rows] = await pool.query('SELECT * FROM despachos');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ 
      message: 'algo va mal', 
    });
  }
};

export const getDespacho = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM despachos WHERE id_despacho = ?', [req.params.id]);

    if (rows.length <= 0) {
      return res.status(404).json({
        message: 'Despachador no encontrado',
      });
    }

    res.json(rows[0]);
  } catch (error) {
     return res.status(500).json({ 
      message: 'algo va mal', 
    });
  }
};

export const createDespachos = async (req, res) => {
  try {
    const {
      hora_salida,
      ruta,
      origen,
      destino,
      fk_id_conductor,
      fk_id_despachador,
      fecha_hora_de_creacion,
    } = req.body;

    const [rows] = await pool.query(
      'INSERT INTO despachos (hora_salida, ruta, origen, destino, fk_id_conductor, fk_id_despachador, fecha_hora_de_creacion) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [hora_salida, ruta, origen, destino, fk_id_conductor, fk_id_despachador, fecha_hora_de_creacion]
    );
    res.send({
      id: rows.insertId,
      hora_salida,
      ruta,
      origen,
      destino,
      fk_id_conductor,
      fk_id_despachador,
      fecha_hora_de_creacion,
    });
  } catch (error) {
    return  res.status(500).json({
       message: 'algo va mal',
       });
  }
};

export const updateDespachos = (req, res) => res.send('Actualizando Despachos');

export const updateDespacho = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      hora_salida,
      ruta,
      origen,
      destino,
      fk_id_conductor,
      fk_id_despachador,
      fecha_hora_de_creacion,
    } = req.body;

    const [result] = await pool.query(
      "UPDATE despachos SET hora_salida = IFNULL(?, hora_salida), ruta = IFNULL(?, ruta), origen = IFNULL(?, origen), destino = IFNULL(?, destino), fk_id_conductor = IFNULL(?, fk_id_conductor), fk_id_despachador = IFNULL(?, fk_id_despachador), fecha_hora_de_creacion = IFNULL(?, fecha_hora_de_creacion) WHERE id_despacho = ?",
      [hora_salida, ruta, origen, destino, fk_id_conductor, fk_id_despachador, fecha_hora_de_creacion, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Despacho not found' });
    }

    res.status(200).json({ message: 'Despacho updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
export const deleteDespachos = (req, res) => res.send('Borrando Despachos');

export const deleteDespacho = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM despachos WHERE id_despacho = ?", [
      req.params.id,
    ]);

    if (result.affectedRows <= 0) {
      return res.status(404).json({
        message: 'Despacho no encontrado',
      });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: 'Algo va mal',
    });
  }
};