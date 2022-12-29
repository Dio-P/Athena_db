import { appsCollection } from "../../index.js";
export function AppsModel() {
  return {

    // const getNamesById = (ids) => {
    //   appsCollection
    //     .find
    //     // https://www.mongodb.com/docs/drivers/node/current/usage-examples/find/
    //     // https://www.mongodb.com/docs/manual/reference/operator/query/
    // }
  
    async getAppByName (name){
      appsCollection
          .findOne({ name: name })
          .then((app) => {
            console.log("app@Inside", app);
            return res.json(app);
          })
          .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err });
          }); 
    }
  }
}

export default appsModel

