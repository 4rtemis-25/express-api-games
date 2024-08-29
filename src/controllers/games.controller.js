import { pool } from "../db.js";

export const getGames = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM games')
    res.json(rows)
}

export const createGames = async (req, res) => {
    const { name, price } = req.body
    const [rows] = await pool.query('INSERT INTO games (name, price) VALUES (?, ?)', [name, price])
    res.send({
        id: rows.insertId,
        name,
        price
    })
}

export const getGamesById = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM games WHERE id = ?', [req.params.id])

    if(rows.length <= 0) return res.status(404).json({
        message: 'Game Not Found'
    })
    res.json(rows[0])
}

export const updateGames = (req, res) => res.send ('PUT GAMES')

export const deleteGames = (req, res) => res.send ('DELETE GAMES')