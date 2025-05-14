import { pool } from "../db.js";

// Obtener todos los medicamentos
export const getMedicamentos = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM Medicamentos");
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener medicamentos" });
  }
};

// Obtener un medicamento por ID
export const getMedicamentosById = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM Medicamentos WHERE id = ?", [req.params.id]);

    if (rows.length === 0)
      return res.status(404).json({ message: "No existe el medicamento" });

    res.json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener el medicamento" });
  }
};

// Crear un nuevo medicamento
export const createMedicamento = async (req, res) => {
  try {
    const { tipo, nombre, nom_comercial, presentacion, receta, precio } = req.body;

    const [result] = await pool.query(
      "INSERT INTO Medicamentos (tipo, nombre, nom_comercial, presentacion, receta, precio) VALUES (?, ?, ?, ?, ?, ?)",
      [tipo, nombre, nom_comercial, presentacion, receta, precio]
    );

    res.status(201).json({
      id: result.insertId,
      tipo,
      nombre,
      nom_comercial,
      presentacion,
      receta,
      precio,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear el medicamento" });
  }
};

// Actualizar un medicamento
export const updateMedicamento = async (req, res) => {
  try {
    const { id } = req.params;
    const { tipo, nombre, nom_comercial, presentacion, receta, precio } = req.body;

    const [result] = await pool.query(
      `UPDATE Medicamentos SET tipo = ?, nombre = ?, nom_comercial = ?, presentacion = ?, receta = ?, precio = ? WHERE id = ?`,
      [tipo, nombre, nom_comercial, presentacion, receta, precio, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "No existe el medicamento" });

    res.json({ message: "Medicamento actualizado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al actualizar el medicamento" });
  }
};

// Eliminar un medicamento
export const deleteMedicamento = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM Medicamentos WHERE id = ?", [req.params.id]);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "No existe el medicamento" });

    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar el medicamento" });
  }
};
