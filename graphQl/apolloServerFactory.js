
import { ApolloServer } from '@apollo/server';
import typeDefs from './typeDef.js';
import { createResolvers } from './resolvers.js';
import { appsCollection } from '../index.js';
import AppsModel from './models/appsModel.js';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';



// const apolloPlaygroundSettings = nonProduction ? { settings: { 'request.credentials': 'same-origin' } } : false;

export const createApolloServer = (httpServer) => {
  const models = {
    Apps: AppsModel()
  };

  return new ApolloServer({
    typeDefs,
    resolvers: createResolvers(models),
    // apolloPlayground: apolloPlaygroundSettings,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    context: models
  })

}