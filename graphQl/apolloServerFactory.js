
import { ApolloServer } from '@apollo/server';
import typeDefs from './typeDef';
import { createResolvers } from './resolvers';


// const apolloPlaygroundSettings = nonProduction ? { settings: { 'request.credentials': 'same-origin' } } : false;

export const createApolloServer = () => {
  const models = {
    Apps: appsModel()
  };

  return new ApolloServer({
    typeDefs,
    resolvers: createResolvers(models),
    // apolloPlayground: apolloPlaygroundSettings,
  })

}