import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import bodyParser from 'body-parser';
import { createApolloServer } from './graphQl/apolloServerFactory.js';
import http from 'http';
import { MongoClient }  from 'mongodb';
import { expressMiddleware } from '@apollo/server/express4';


import express from 'express';
import cors from 'cors'

const graphqlUrl = '/graphql';
export let db;
export let appsCollection

const app = express();
const httpServer = http.createServer(app);
const apolloServer = createApolloServer(httpServer);

await apolloServer.start();

// app.use(cors());
import createRouter from './helpers/createRouter.js';

// app.use(express.json());
// let appsRouter;
app.use(
  graphqlUrl,
  cors(),
  bodyParser.json({ limit: '50mb' }),
  expressMiddleware(apolloServer, {
    context: async ({ req }) => ({ token: req.headers.token }),
  }),
);

// app.use(graphqlUrl, bodyParser.json({ limit: '50mb' }));
// apolloServer.applyMiddleware({ app });

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
.then(client => {
  db = client.db('apps_db');
  appsCollection = db.collection('apps');
  // appsRouter = createRouter(appsCollection);
  // app.use('/athena', appsRouter);
  // app.use('/athena', apolloServer);//attempt to link this
  // how to pass appsCollection within apolloServer?
})

await new Promise((resolve) => httpServer.listen({ port: 5051 }, resolve));
console.log(`🚀 Server ready at http://localhost:4000/graphql`);