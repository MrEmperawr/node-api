const express = require('express')

app = express()
const PORT = 3002

app.listen(PORT, () => console.log(`The Server is up and running on port ${PORT}`))

app.get(`/`, (request, response) => {
    response.send('This is the first test response! from the home route: /');
  });