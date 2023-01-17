import { appsCollection } from "../../index.js";
// import { ObjectId } from "mongodb";
import { ObjectID } from "bson";
const toPart = (app) => {
  const {
    parts
  } = app;
  // console.log("_id!!!!!!!!!!", _id, app);
  return {
    parts
  }
}

export function PartsModel() {
  return {
  
    async getPartByIdAndAppId(args){
      console.log("args.partId", args.partId);
      console.log("args.appId", args.appId);
      const dbRes = await appsCollection.findOne({ "parts.id": "somePartId1" }, {"parts.id": "somePartId1"});
      // am I messing up the ids? (local and db- here I need the db)
      console.log("dbRes", dbRes);
      const app = toPart(dbRes);
      console.log("app", app);
      return app
    },

    // async getAppByName(args){
    //   console.log("args.id", args);
    //   const dbRes = await appsCollection.findOne({ name: args.name });
    //   console.log("dbRes", dbRes);
    //   const app = toApp(dbRes);
    //   console.log("app", app);
    //   return app
    // },

    // async getAppsByTeam(args){
    //   const dbResRaw = await appsCollection.find({ teams: args.team });
    //   const dbRes = await dbResRaw.toArray();
    //   const apps = await dbRes.map((singleApp) => (toApp(singleApp)));
    //   return apps
    // },
  }
}

export default PartsModel
