const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const { getGames, addGame, updateGame, getGameByID, deleteGame } = require('./routes/games')

const PORT = 3002
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app
  .route('/games')
  .get(getGames)
  .post(addGame)

app
  .route('/games/:id')
  .get(getGameByID)
  .put(updateGame)
  .delete(deleteGame)

  
  app.get(`/`, (request, response) => {
    response.send('This is the first test response! from the home route: /')
  });


  app.listen(PORT, () => console.log(`The Server is up and running on port ${PORT}`))