import { appsCollection } from "../index.js";

export function createResolvers(models) {
  console.log("models", models);
  return {
    Query: {
      // getAppsName: (_, args, ctx) => ctx.models.Apps.getNamesById(args),
      getAppByName: async(_, args, ctx) => await models.Apps.getAppByName(args)

    }
  }
}