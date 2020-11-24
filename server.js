const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer( (req, res) => {

    let filePath = __dirname + '/public/index.html';

    //console.log(req.url);

    switch(req.url) {
        case '/shop':
            filePath = __dirname + '/public/shop.html';
            break;

        default:
            filePath = __dirname + '/public/index.html';
            break;
    }

    fs.readFile(filePath, (err, data) => {
        res.statusCode = 200; // ok
        res.setHeader('Content-Type', 'text/html');
        res.end(data, 'utf8');
        console.log(err.message);
    });

});

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});