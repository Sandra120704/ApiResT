import { Pool } from "../database/db.js";

export const getMedicamentos = async (res, req) => {
  const [rows] = await Pool.query("SELECT * FROM Medicamentos");
  res.json(rows);
};

export const createMedicamento = async (res, req) => {
  const { tipo, nombre, nom_comercial, presentacion, receta, precio } = req.body;
  const [rows] = await Pool.query(
    "INSERT INTO Medicamentos (tipo, nombre, nom_comercial, presentacion, receta, precio) VALUES (?, ?, ?, ?, ?, ?)",
    [tipo, nombre, nom_comercial, presentacion, receta, precio]
  );
  res.send({
    id: rows.insertId,
    tipo: tipo,
    nombre: nombre,
    nom_comercial: nom_comercial,
    presentacion: presentacion,
    receta: receta,
    precio: precio
  })
};

export const updateMedicamento = async (res, req) => {
  const id = req.params.id;
  const { tipo, nombre, nom_comercial, presentacion, receta, precio } = req.body;

  const querySQL = 
   `UPDATE Medicamentos SET
      tipo = ?,
      nombre = ?,
      nom_comercial = ?,
      presentacion = ?,
      receta = ?,
      precio = ?
      WHERE id = ?`;

  const [result] = await Pool.query(querySQL, [tipo, nombre, nom_comercial, presentacion, receta, precio, id]);

  if(result.affectedRows > 0){
    return res.send(404).json({
      message: "No se pudo actualizar el medicamento"
    })
  }

  res.json({message: "Medicina actualizada"});
  
};
      
export const deleteMedicamento = async (res, req) => {
  const [result] = await Pool.query("DELETE FROM Medicamentos WHERE id = ?", [req.params.id]);
  if(result.affectedRows > 0){
    return res.send(404).json({
      message: "No se pudo eliminar el medicamento"
    })
  }
  res.json(204);
};