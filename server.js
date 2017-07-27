const express = require('express'),
      cors = require('cors'),
      app = express();

app.use(express.static(__dirname + '/build'));
app.use(cors());

app.get('/api/getdata', (req, res) => {
  const json = {
    backEndData: "I came from the api route in the back end"
  }

  res.json(json);
});

app.get('/*', (request, response) => {
  response.sendFile(__dirname + '/build/' + 'index.html');
});

app.listen(8000);
