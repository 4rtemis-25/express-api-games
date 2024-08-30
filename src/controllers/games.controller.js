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

export const updateGames = async (req, res) => {
    const { id } = req.params
    const { name, price } = req.body

    const [result] = await pool.query('UPDATE games SET name = IFNULL(?, name), price = IFNULL(?, price) WHERE id = ?', [name, price, id]) 
    
    console.log(result);
    

    if(result.affectedRows === 0) return res.status(404).json({
        message: 'Game not found'
    })

    const [rows] = await pool.query('SELECT * FROM games WHERE id = ?', [id])

    res.json(rows[0])
    
} 

export const deleteGames = async (req, res) => {
    const result = await pool.query('DELETE FROM games WHERE id = ?', [req.params.id])

    if(result.affectedRows <= 0) return res.status(404).json({
        message: 'Game not found'
    })

    res.sendStatus(204)
}