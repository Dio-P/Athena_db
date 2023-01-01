import { appsCollection } from "../index.js";

export function createResolvers(models) {
  return {
    Query: {
      // getAppsName: (_, args, ctx) => ctx.models.Apps.getNamesById(args),
      getAppById: async(_, args, ctx) => await models.Apps.getAppById(args),
      getAppsByTeam: async(_, args, ctx) => await models.Apps.getAppsByTeam(args),

    }
  }
}