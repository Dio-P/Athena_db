import { appsCollection } from "../../index.js";
// import { ObjectId } from "mongodb";
import { ObjectID } from "bson";
const toPart = (part) => {
  const {
    name,
    id,
    ghRepo,
    type,
    folderToBeDisplayedIn,
    appParent,
  } = part;
  // console.log("_id!!!!!!!!!!", _id, app);
  return {
    name,
    id,
    ghRepo,
    type,
    folderToBeDisplayedIn,
    appParent,
  }
}

export function PartsModel() {
  return {
  
    async getPartByIdAndAppId(args){
      console.log("args.partId", args.partId);
      console.log("args.appId", args.appId);
      const dbRes = await appsCollection.findOne({ _id: ObjectID(args.appId), parts: { id: args.partId} });
      // am I messing up the ids? (local and db- here I need the db)
      console.log("dbRes", dbRes);
      const part = toPart(dbRes);
      console.log("part", part);
      return part
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
