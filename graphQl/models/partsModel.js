import { appsCollection } from "../../index.js";
// import { ObjectId } from "mongodb";
import { ObjectID } from "bson";
import { findPartsDocs } from "../../helpers/updateDbDocsLogic.js";

const partWithDocs = (partWithoutDocs, docs) => {

  const {
      name,
      id,
      ghRepo,
      type,
      folderToBeDisplayedIn,
      appParent,
    } = partWithoutDocs;

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

const toUpdatedPart = (app, partId) => {

  const {
    parts,
    properties: {
      docs
    }
  } = app;

  // const {
  //   name,
  //   id,
  //   ghRepo,
  //   type,
  //   folderToBeDisplayedIn,
  //   appParent,
  // } = parts.find((part)=>(part.id===partId));

  const partWithoutDocs = parts.find((part)=>(part.id===partId));

  return partWithDocs(partWithoutDocs, docs)
  // return {
  //   name,
  //   id,
  //   ghRepo,
  //   type,
  //   folderToBeDisplayedIn,
  //   appParent,
  //   docs: findPartsDocs(docs, id)
  // }
}

const updateOnlyAPart = (app, partId, updatedPart) => {
  console.log("initial updatedPart", updatedPart);
  const {
    parts,
    properties: {
      docs
    }
  } = app;

  let indexOfPartToUpdate = parts.indexOf(parts.find((part)=>(part.id===partId)));
  parts.splice(indexOfPartToUpdate, 1, partWithDocs(updatedPart, docs))

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
      const beforeApp = await appsCollection.findOne({ "parts.id": id });
      await appsCollection.updateOne({ "parts.id": id }, {$set:updateOnlyAPart(beforeApp, id, updatedPart)});
      const newApp = await appsCollection.findOne({ "parts.id": id });

      return newApp
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
