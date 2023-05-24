import { appsCollection } from "../../index.js";
// import { ObjectId } from "mongodb";
import { ObjectID } from "bson";
import { findPartsDocs } from "../../helpers/updateDbDocsLogic.js";

const toUpdatedPart = (app, partId) => {

  const {
    parts,
    properties: {
      docs
    }
  } = app;

  const {
    name,
    id,
    ghRepo,
    type,
    folderToBeDisplayedIn,
    appParent,
  } = parts.find((part)=>(part.id===partId));

  return {
    name,
    id,
    ghRepo,
    type,
    folderToBeDisplayedIn,
    appParent,
    docs: findPartsDocs(docs, id)
  }
}

const updateOnlyAPart = (app, partId, updatedPart) => {
  console.log("initial app", app);
  console.log("initial partId", partId);
  console.log("initial updatedPart", updatedPart);
  const {
    parts,
    properties: {
      docs
    }
  } = app;

  parts.find((part)=>(part.id===partId)).delete();
  console.log("app**", app);
  parts.push(updatedPart)
  return app;
}

export function PartsModel() {
  return {
  
    async getPartById({partId, appId}){
      const dbRes = await appsCollection.findOne({ "parts.id": partId });
      let part = toUpdatedPart(dbRes, partId);
      return part;
    },

    async updatePartById({id, updatedPart}){
      console.log("updatePartById");
      console.log("partId", id);
      // await appsCollection.updateOne({ "parts.id": id }, {$set:updatedPart});
      const preexistingApp = await appsCollection.findOne({ "parts.id": id });
      console.log("preexistingApp@", preexistingApp);
      const updatePart = await appsCollection.updateOne({ "parts.id": id }, {$set:updateOnlyAPart(preexistingApp, id, updatedPart)});
    //   const partToBeReplaced = db.collection.aggregate([
    //     { $match: { "parts.id" : id } },
    //     { $replaceWith: updatedPart }
    //  ])
      // const partToBeReplaced = await appsCollection.findOne({ "parts.id": id });;
      console.log("updatePart@", updatePart);
      return partToBeReplaced
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
