var express = require('express');
var bodyParser = require('body-parser');
var {
  graphqlExpress,
  graphiqlExpress,
} = require('apollo-server-express');

const myGraphQLSchema = {};
const PORT = 3001;

const app = express();

// bodyParser is needed just for POST.
app.use('/graphql',
        bodyParser.json(),
        graphqlExpress({
          schema: myGraphQLSchema }));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

app.listen(PORT);
