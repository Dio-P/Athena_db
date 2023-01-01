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
  
    async getAppById(args){
      const dbRes = await appsCollection.findOne({ id: args.id });
      const app = toApp(dbRes);
      return app
    },

    async getAppsByTeam(args){
      const dbResRaw = await appsCollection.find({ teams: args.team });
      const dbRes = await dbResRaw.toArray();
      const apps = await dbRes.map((singleApp) => (toApp(singleApp)));
      return apps
    },
  }
}

export default AppsModel
