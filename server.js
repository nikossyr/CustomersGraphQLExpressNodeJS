const express = require('express');
const colors = require('colors');
const {graphqlHTTP} = require('express-graphql');

const app = express();

app.use('/graphql', graphqlHTTP({
        // schema,
        graphicl: true
    })
);

app.listen(4000, () => console.log('Server running on port 4000...'.yellow.bold));

