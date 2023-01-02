import { appsCollection } from "../../index.js";
// import { ObjectId } from "mongodb";
import { ObjectID } from "bson";
const toApp = (app) => {
  const {
    _id,
    name,
    // type,
    // gitHubRepo,
    // briefDescr,
    // teams,
    // facing,
    folders,
    parts,
    // connections,
    properties
  } = app;
  // console.log("_id!!!!!!!!!!", _id, app);
  return {
    id: _id,//.toString(),
    name,
    // type,
    // gitHubRepo,
    // briefDescr,
    // teams,
    // facing,
    folders,
    parts,
    // connections,
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
      console.log("args.id", args.id);
      const dbRes = await appsCollection.findOne({ _id: ObjectID(args.id) });
      console.log("dbRes", dbRes);
      const app = toApp(dbRes);
      console.log("app", app);
      return app
    },

    async getAppByName(args){
      console.log("args.id", args);
      const dbRes = await appsCollection.findOne({ name: args.name });
      console.log("dbRes", dbRes);
      const app = toApp(dbRes);
      console.log("app", app);
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
