import { appsCollection } from "../index.js";

export function createResolvers(models) {
  console.log("models", models);
  return {
    Query: {
      getAppsName: (_, args, ctx) => ctx.models.Apps.getNamesById(args),
      // I need to pass the context if I am not 
      // and to writte the model
      getAppByName: (_, args, ctx) => {
        console.log("args", args.name);
        console.log("appsCollection", appsCollection);
        appsCollection
        .findOne({ name: args.name })
        .then((app) => {
          console.log("app@Inside", app);
          return JSON.stringify(app);
        })
        .catch((err) => {
          console.error(err);
        }); 

        // console.log("ctx", ctx);

        // models.Apps.getAppByName(args)
        ////////
      }
    }
  }
}