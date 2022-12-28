import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import bodyParser from 'body-parser';
import { createApolloServer } from './graphQl/apolloServerFactory.js';

import express from 'express';
const app = express();
import cors from 'cors'
import { MongoClient }  from 'mongodb';

app.use(cors());
import createRouter from './helpers/createRouter.js';

app.use(express.json());
export let db;
let appsCollection
let appsRouter;

const graphqlUrl = '/graphql';
const apolloServer = createApolloServer();

app.use(graphqlUrl, bodyParser.json({ limit: '50mb' }));
apolloServer.applyMiddleware({ app });

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
.then(client => {
  db = client.db('apps_db');
  appsCollection = db.collection('apps');
  appsRouter = createRouter(appsCollection);
  // app.use('/athena', appsRouter);
  app.use('/athena', apolloServer);//attempt to link this
  // how to pass appsCollection within apolloServer?
})
  app.listen(5051, function(){
    console.log(`app listening on port ${this.address().port}`);
})
