import { appsCollection } from "../index.js";

export function createResolvers(models) {
  console.log("models", models);
  return {
    Query: {
      getAppsName: (_, args, ctx) => ctx.models.Apps.getNamesById(args),
      // I need to pass the context if I am not 
      // and to writte the model
      getAppByName: async(_, args, ctx) => {
        // console.log("args", args.name);
        // console.log("appsCollection", appsCollection);
        // let app;
        // appsCollection
        // .findOne({ name: args.name })
        // .then((app) => {
        //   console.log("app@Inside", app);
        //   app = JSON.stringify(app);
        //   return JSON.stringify(app);
        // })
        // .catch((err) => {
        //   console.error(err);
        // }); 
        // return app

        console.log("ctx", ctx);
        console.log("args", args.name);
        console.log("models.Apps", models.Apps);
        const res = await models.Apps.getAppByName(args);
        console.log("res!!!@@", res);
        return res
        ////////
      }
    }
  }
}