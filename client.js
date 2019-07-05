const { readFileSync } = require('fs');
const { connect } = require('tls');

const client = connect(
    8000,
    '207.246.102.111',
    {
        ca: [readFileSync('./server-cert.pem')],
        checkServerIdentity: () => { return null; },
    });
client.on('secureConnect', () => {
    console.log('client connected', client.authorized ? 'authorized' : 'unauthorized');
    setInterval(() => {
        client.write(Buffer.allocUnsafe(1024, 50).toString());
    }, 1);
})
    .on('data', data => console.log(`${new Date().toISOString()}\n${data}`))
    .on('end', () => {
        console.log('server ends connections');
        client.destroy();
    })
    .on('close', () => console.log(`${new Date().toISOString()}`))
    .setEncoding('utf-8');

