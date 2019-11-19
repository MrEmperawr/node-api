const { pool } = require('../../config.js')

const getGames = (request, response) => {
    pool.query('SELECT * FROM Games ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

const addGame = (request, response) => {
  const { title, genre, developer_studio, release_date, metacritic_score, steam_review, publisher } = request.body

  pool.query(
    'INSERT INTO games (title, genre, developer_studio, release_date, metacritic_score, steam_review, publisher) VALUES ($1, $2, $3, $4, $5, $6, $7)', 
    [title, genre, developer_studio, release_date, metacritic_score, steam_review, publisher], error => {
        if (error) {
        throw error
        }
        response.status(201).json({ status: 'success', message: 'Game added.' })
    })
}

const getGameByID = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM Games WHERE id = $id', [id], (error, result) => {
    if (error) throw error
    response.status(200).json(result.row)
  })
}

const updateGame = (request, response) => {
  const id = parseInt(request.params.id)
  const { metacritic_score, steam_review} = request.body

  pool.query(
    'UPDATE Games SET metacritic_score = $1, steam_review = $2 WHERE id = $3',
    [metacritic_score, steam_review, id],
    (error, result) => {
      if (error) throw error
      response.status(200).send(`Game updated with ID: ${id}`)
    })

}

const deleteGame = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM Games WHERE id = $1', [id], (error, result) => {
    if (error) throw error
    response.status(200).send(`Game deleted with ID: ${id}`) 
  })
}

module.exports = { getGames, addGame, getGameByID, updateGame, deleteGame }