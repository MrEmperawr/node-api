const { pool } = require('../../config')

const getAverageMetacriticScore = (request, response) => {
    pool.query('SELECT AVG(metacritic_score) FROM Games', (error, result) => {
      if (error) throw error
      response.status(200).json(result.rows)
    })
  }

const getTopGameByMetacriticScore = (request, response) => {
    pool.query('SELECT * FROM Games ORDER BY metacritic_score DESC LIMIT 1', (error, results) => {
        if (error) throw error
        response.status(200).json(results.rows)
    })
}

const getPositiveReviews = (request, response) => {
    pool.query("SELECT title, steam_review FROM Games WHERE steam_review='Very Positive' OR steam_review='Overwhelmingly Positive' ORDER BY steam_review", (error, results) => {
        if (error) throw error
        response.status(200).json(results.rows)
    })
}

const getAllReviews = (request, response) => {
    pool.query('SELECT title, steam_review FROM Games ORDER BY steam_review DESC', (error, results) => {
        if (error) throw error
        response.status(200).json(results.rows)
    })
}

module.exports = { getAverageMetacriticScore, getTopGameByMetacriticScore, getPositiveReviews, getAllReviews }