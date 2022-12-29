import { appsCollection } from "../../index.js";
const toApp = (app) => {
  const {
    _id,
    name,
    type,
    gitHubRepo,
    briefDescr,
    depResponsible,
    facing,
    folders,
    parts,
    connections,
    properties
  } = app;

  return {
    id: _id,
    name,
    type,
    gitHubRepo,
    briefDescr,
    depResponsible,
    facing,
    folders,
    parts,
    connections,
    properties
  }
}

export function AppsModel() {
  return {

    // async getNamesById(ids) {
    //   appsCollection
    //     .find
    //     // https://www.mongodb.com/docs/drivers/node/current/usage-examples/find/
    //     // https://www.mongodb.com/docs/manual/reference/operator/query/
    // }
  
    async getAppByName(args){
      const dbRes = await appsCollection.findOne({ name: args.name });
      const app = toApp(dbRes);
      return app
    },

    async getNamesDepApps(args){
      const dbRes = await appsCollection.find({ teams: args.teams });
      const app = dbRes.map((singleApp) => (toApp(singleApp).name));
      return app
    },
  }
}

export default AppsModel

// working:
// make a find resolver for all the app names of a department

