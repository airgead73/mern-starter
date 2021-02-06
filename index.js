const { createServer } = require('http');
const app = require('./SERVER/app');
const PORT = 3000;
const server = createServer(app);
const environment = process.env.NODE_ENV

server.listen(PORT, () => console.log(`Server listening on port ${PORT}. Environment: ${environment}`));