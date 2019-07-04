const { createServer } = require('tls');
const { readFileSync } = require('fs');

const server = createServer({ pfx: readFileSync('./server.pfx') }, (tlsSocket) => {
    console.log('server connected', tlsSocket.authorized ? 'authorized' : 'unauthorized');
    tlsSocket
        .on('error', (err) => {
            console.error(err);
        })
        .on('data', data => tlsSocket.write(`${new Date().toISOString()}\n${data}`))
        .on('close', () => console.log(`${new Date().toISOString()} socket close`))
    tlsSocket.write('welcome!\n');
    tlsSocket.setEncoding('utf8');
});

server.on('tlsClientError', (exception, tlsSocket) => {
    console.error(exception, tlsSocket);
    tlsSocket.destroy();
});
server.listen(8000, () => {
    console.log('server bound');
});