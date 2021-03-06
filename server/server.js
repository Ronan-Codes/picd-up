const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const { graphqlUploadExpress } = require('graphql-upload')
const app = express();
app.use(graphqlUploadExpress({ maxFieldSize: 1000000000, maxFiles: 10 }));
const server = new ApolloServer({
  uploads: false,
  typeDefs,
  resolvers,
  context: authMiddleware
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(require('./routes'));
// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});

// https://picd-up-project.herokuapp.com/ | https://git.heroku.com/picd-up-project.git

// MONGODB_URI
// mongodb+srv://ronan-codes:26signs@cluster0.gpqkn.mongodb.net/picd-up-project?retryWrites=true&w=majority