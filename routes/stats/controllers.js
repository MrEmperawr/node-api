const { pool } = require('../../config')

const getAverageMetacriticScore = (request, response) => {
    pool.query('SELECT AVG(metacritic_score) FROM Games', (error, result) => {
      if (error) {
        throw error
      }
      response.status(200).json(result.rows)
    })
  }

const getTopGameByMetacriticScore = (request, response) => {
    pool.query('SELECT * FROM Games ORDER BY metacritic_score DESC LIMIT 1', (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
    })
}

const getPositiveReviews = (request, response) => {
    pool.query('SELECT * FROM Games ORDER BY metacritic_score DESC LIMIT 1', (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = { getAverageMetacriticScore, getTopGameByMetacriticScore }