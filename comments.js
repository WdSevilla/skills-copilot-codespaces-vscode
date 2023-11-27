// Create a web server
// 1. Start the server and listen on port 3000
const http = require('http');

const server = http.createServer();

server.listen(3000, () => {
    console.log('Server started on port 3000');
});
