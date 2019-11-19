const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const { getGames, addGame, updateGame, getGameByID, deleteGame } = require('./routes/games')
const { getAverageMetacriticScore, getTopGameByMetacriticScore, getPositiveReviews} = require('./routes/stats')

const PORT = 3002
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get(`/`, (request, response) => {
  console.log(getAverageMetacriticScore)
  response.send('Games from my Steam Library! Try .../games and/or .../stats for some results and such!')
});

app
  .route('/games')
  .get(getGames)
  .post(addGame)

app
  .route('/games/:id')
  .get(getGameByID)
  .put(updateGame)
  .delete(deleteGame)

app
  .route('/stats/average')
  .get(getAverageMetacriticScore)

app
  .route('/stats/topscore')
  .get(getTopGameByMetacriticScore)

app
  .route('/stats/reviews/positive')
  .get(getPositiveReviews)


  app.listen(PORT, () => console.log(`The Server is up and running on port ${PORT}`))