const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { pool } = require('./config')

const PORT = 3002
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const getGames = (request, response) => {
    pool.query('SELECT * FROM Games', (error, results) => {
        console.log(results)
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

app
  .route('/games')
  .get(getGames)
  .post(addGame)

app.listen(PORT, () => console.log(`The Server is up and running on port ${PORT}`))

app.get(`/`, (request, response) => {
    response.send('This is the first test response! from the home route: /')
  });