import { appsCollection } from "../../index.js";
// import { ObjectId } from "mongodb";
import { ObjectID } from "bson";
import { updateWithFolders } from "../../helpers/updateDbDocsLogic.js";
const toApp = (app) => {
  const {
    _id,
    name,
    folders,
    parts,
    properties
  } = app;

  return {
    id: _id,
    name,
    folders,
    parts,
    properties
  }
}

const toAppWithFolder = (app) => {
  const {
    _id,
    name,
    folders,
    parts,
    properties: {
      docs
    }
  } = app;

  return {
    id: _id,
    name,
    folders: updateWithFolders(folders, parts, docs),
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

    async getAppWithFoldersById(args){
      console.log("args.id", args.id);
      const dbRes = await appsCollection.findOne({ _id: ObjectID(args.id) });
      console.log("dbRes", dbRes);
      const app = toAppWithFolder(dbRes);
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
