import { appsCollection } from "../../index.js";
const toApp = (app) => {
  console.log("app@@@@@", app);
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
  
    async getAppByName (args){
      console.log("appsCollection", appsCollection);
      const app = await appsCollection.findOne({ name: args.name });
      console.log("app@Inside", app);
      const appJ = toApp(app);
      console.log("appJ", appJ);
      return appJ
          // .then((app) => {
          //   console.log("app@Inside", app);
          //   const appJ = toApp(app);
          //   console.log("appJ", appJ);
          //   return appJ
          // })
          // .catch((err) => {
          //   console.error(err);
          // }); 
          // console.log("appJ)ut", appJ);
    }
  }
}

export default AppsModel

