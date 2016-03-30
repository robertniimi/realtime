var
  express = require('express'),
  app = express(),
  path = require('path');

app.use(express.static(__dirname + '/dist/'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.listen(8080);

console.log('listening on port 8080');
