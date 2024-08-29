import { pool } from "../db.js";

export const getGames = (req, res) => res.send ('GET GAMES')

export const createGames = async (req, res) => {
    const { name, price } = req.body
    const [rows] = await pool.query('INSERT INTO games (name, price) VALUES (?, ?)', [name, price])
    res.send({
        id: rows.insertId,
        name,
        price
    })
}

export const updateGames = (req, res) => res.send ('PUT GAMES')

export const deleteGames = (req, res) => res.send ('DELETE GAMES')