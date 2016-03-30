var
  express = require('express'),
  app = express(),
  server = require('http').Server(app);
  path = require('path'),
  io = require('socket.io')(server);

// if (process.env.NODE_ENV === 'development') {
//   const webpack = require('webpack');
//   const webpackConfig = require('./app/webpack.config');
//   const compiler = webpack(webpackConfig);

//   app.use(require('webpack-dev-middleware')(compiler, {
//     noInfo: true,
//     publicPath: webpackConfig.output.publicPath,
//   }));

//   app.use(require('webpack-hot-middleware')(compiler));
// };

app.use(express.static(__dirname + '/dist/'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

server.listen(8080);

io.on('connection', function (socket) {
  console.log("Socket connected: ", socket.id)
  socket.on('update', function (data) {
    socket.emit('update', data);
  });
});

console.log('listening on port 8080');
