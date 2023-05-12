const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'My Contacts API',
        description: 'Description',
    },
    host: 'localhost:8080',
    schemes: ['http', 'https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./server.js'];

swaggerAutogen(outputFile, endpointsFiles, doc)