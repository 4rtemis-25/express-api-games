import { pool } from "../db.js";

export const queryTest = async (req, res) => {
    const [result] = await pool.query('SELECT "Consulta" AS prueba')
    res.json(result[0]) 
}