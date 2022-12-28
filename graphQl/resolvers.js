export function createResolvers() {
  return {
    Query: {
      getAppsName: (_, args, ctx) => ctx.models.Apps.getByIds(args),
      // I need to pass the context if I am not 
      // and to writte the model
      getApp: (_, args, ctx) => ctx.models.Apps.getByIds(args)
    }
  }
}