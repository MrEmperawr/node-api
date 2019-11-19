const { pool } = require('../../config')

const getAverageMetacriticScore = (request, response) => {
    pool.query('SELECT * FROM Games ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }