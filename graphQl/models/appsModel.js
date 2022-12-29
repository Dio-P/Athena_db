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

    async getAppsByTeam(args){
      // console.log("args", args);
      const dbResRaw = await appsCollection.find({ teams: args.team });
      console.log("dbResRaw", dbResRaw);
      const dbRes = await dbResRaw.toArray();
      console.log("dbRes2", dbRes);
      const apps = await dbRes.map((singleApp) => (toApp(singleApp)));
      // console.log("apps@@@@3", apps);
      return apps
    },
  }
}

export default AppsModel

// working:
// make a find resolver for all the app names of a department

