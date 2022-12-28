
export function createResolvers() {
  return {
    Query: {
      getAppsName: (_, args, ctx) => ctx.models.Apps.getNamesById(args),
      // I need to pass the context if I am not 
      // and to writte the model
      getAppByName: (_, args, ctx) => ctx.models.Apps.getAppByName(args)
    }
  }
}