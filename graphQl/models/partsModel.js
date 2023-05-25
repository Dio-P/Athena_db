import { appsCollection } from "../../index.js";
// import { ObjectId } from "mongodb";
import { ObjectID } from "bson";
import { partWithDocs } from "../../helpers/updateDbDocsLogic.js";



const getOrUpdatePart = (app, partId, updatedPart) => {

  const {
    _id,
    name,
    type,
    gitHubRepo,
    briefDescr,
    teams,
    folders,
    parts,
    properties
  } = app;

  const requestedPartWithoutDocs = parts.find((part)=>(part.id===partId));

  const updatePart = () => {
    let indexOfPartToUpdate = parts.indexOf(requestedPartWithoutDocs);
    parts.splice(indexOfPartToUpdate, 1, partWithDocs(updatedPart, properties.docs));
    console.log("app*@!@*", app);
  
    return {
      id: _id,
      name,
      type,
      gitHubRepo,
      briefDescr,
      teams,
      folders,
      parts,
      properties
    }
  }

  return updatedPart? updatePart() : partWithDocs(requestedPartWithoutDocs, properties.docs)
}

export function PartsModel() {
  return {
  
    async getPartById({partId, appId}){
      const dbRes = await appsCollection.findOne({ "parts.id": partId });
      let part = getOrUpdatePart(dbRes, partId);
      return part;
    },

    async updatePartById({id, updatedPart}){
      const beforeApp = await appsCollection.findOne({ "parts.id": id });
      await appsCollection.updateOne({ "parts.id": id }, {$set: getOrUpdatePart(beforeApp, id, updatedPart)});
      const newApp = await appsCollection.findOne({ "parts.id": id });
      console.log("newApp", newApp);
      return newApp
    },

  }
}

export default PartsModel
