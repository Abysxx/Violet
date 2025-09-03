// index.mjs
import bare from '@tomphttp/bare-server-node'; // default import
import http from 'http';
import nodeStatic from 'node-static';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create the bare server
const bareServer = bare('/bare/'); // call default export

const serve = new nodeStatic.Server(path.join(__dirname, 'static'));

const server = http.createServer();

server.on('request', (req, res) => {
    if (bareServer.shouldRoute(req)) {
        bareServer.routeRequest(req, res);
    } else {
        serve.serve(req, res);
    }
});

server.on('upgrade', (req, socket, head) => {
    if (bareServer.shouldRoute(req)) {
        bareServer.routeUpgrade(req, socket, head);
    } else {
        socket.end();
    }
});

server.listen(process.env.PORT || 8080, () => {
    console.log('[😼]: Violet running at http://localhost:8080');
});

