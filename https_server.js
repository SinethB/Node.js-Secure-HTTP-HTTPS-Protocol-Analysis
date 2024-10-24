const fs = require('fs');
const https = require('https');

const options = {
  key: fs.readFileSync('./server.key'),
  cert: fs.readFileSync('./server.cert')
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('Hello, HTTPS world!');
}).listen(3001, () => {
  console.log('HTTPS server is running on port 3001');
});
