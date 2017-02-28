const http = require('http');
const server = new http.Server();

server.on('request', (req, res) => {
   res.setHeader('content-type', 'text/html');

   res.write('hello, <b>User</b>');

   res.end();
});

server.listen(3000);