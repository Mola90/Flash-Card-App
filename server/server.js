const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const cors = require("cors");
const { authMiddleware } = require("./utils/auth");
const connectDB = require("./config/connection");

connectDB();

const { typeDefs, resolvers } = require('./schemas');
// const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
  });


const startApolloServer = async () => {
  await connectDB();

  await server.start();

   app.use(cors());
   app.use(express.urlencoded({ extended: true }));
   app.use(express.json());

   app.use('/graphql', expressMiddleware(server,  {
    context: authMiddleware
  }));

   if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/index.html'));
      });
    } 

    mongoose.connection.once('open', () => {
        app.listen(PORT, () => {
          console.log(`API server running on port ${PORT}!`);
          console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
        });
      });
    
};
startApolloServer();