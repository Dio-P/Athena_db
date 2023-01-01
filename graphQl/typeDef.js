import gql from "graphql-tag";


const typeDefs = gql `
  scalar JSON
  scalar Date

  type App {
    # app_id to be checked
    id: ID!
    name: String
    type: String
    gitHubRepo: String
    # briefDescr: String
    teams: [String]
    # facing: Facing
    folders: [Folder]
    parts: [Part]
    # connections: [Connection]
    properties: Properties
  }

  type Facing {
    user: Boolean
    audience: Boolean
  }

  type Folder {
    title: String
    id: Int
  }

  type Part {
    name: String
    id: String
    ghRepo: String
    type: String
    folderToBeDisplayedIn: [ID]
  }

  # type Connection {

  # }

  type Properties {
    docs: [Doc]

  }

  type Doc {
    title: String
    url: String
    id: String
    source: String
    lastModified: String
    concerningParts: [ID]
    flags: Flags
  }

  type Flags {
    isLinkUpToDate: Boolean
  }

  type Query {
    getAppsName(ids: [ID!]!): [String]
    getAppById(id: ID!): App
    getAppByName(name: String!): App
    getAppsByTeam(team: String!): [App]
  }

  # type Mutations {

  # }
`
export default typeDefs;

