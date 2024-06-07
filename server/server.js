import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import path from 'path';
import { fileURLToPath } from 'url'; // Import fileURLToPath to handle file URLs
import cors from 'cors';
import connectDB from './config/connection.js';
import mongoose from 'mongoose';
import typeDefs from './schema/typeDefs.js';
import resolvers from './schema/resolvers.js';
import authMiddleware from './utils/auth.js';
import dotenv from "dotenv"; 

dotenv.config();  // Load environment variables

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

// Set up __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
//lo

startApolloServer();
