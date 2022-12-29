import { appsCollection } from "../index.js";

export function createResolvers(models) {
  return {
    Query: {
      // getAppsName: (_, args, ctx) => ctx.models.Apps.getNamesById(args),
      getAppByName: async(_, args, ctx) => await models.Apps.getAppByName(args),
      getAppsByTeam: async(_, args, ctx) => await models.Apps.getAppsByTeam(args),

    }
  }
}