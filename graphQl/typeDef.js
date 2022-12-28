import gql from "graphql-tag";


const typeDefs = gql `
  scalar JSON
  scalar Date

  type App {
    # app_id to be checked
    name: String
    type: String
    gitHubRepo: String
    # briefDescr: String
    # depResponsible: [String]
    # facing: Facing
    folders: [Folder]
    parts: [Part]
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
`
export default typeDefs;

{
  name: "optimo",
  type: "app",
  gitHubRepo: "someLink.github.com",
  briefDescr: "this is the optimo app, the best app in the world",
  depResponsible: ["DPub"],
  facing: {
    user: true,
    audience: false,
  },
  folders: [
    {
      title: "general documentation",
      id: 0
     },
    {
     title: "client",
     id: 1
    },
    {
     title: "server",
     id: 2
    },
   ],
  parts: [
    {
      name: "general documentation",
      id: "somePartId1",
      ghRepo: "www.someGitHubLink.com",
      type: "documentation",
      folderToBeDisplayedIn: "0",
    },
    {
      name: "published postgres",
      id: "somePartId2",
      ghRepo: "www.someGitHubLink.com",
      type: "data base",
      folderToBeDisplayedIn: "1",
    }
  ],
  connection: [ //change that to plural
    {
    name: "Things-api",
    id: "someString",
    typeOf: "resievesFrom"
    },
    {
      name: "Disco-api",
      id: "someString",
      typeOf: "resievesFrom"
    }
  ],
  properties: {
    docs: [
      {
        title: "Some Doc1",
        url: "https://someLink.com",
        id: "someDocId",
        source: "Confluence",
        lastModified: "someDate",
        concerningParts: ["some part id"],
        flags: {
          isLinkUpToDate: true,
          // requestAction: [
          //   {
          //     date: "some date",
          //     userRequesting: "userId",
          //     typeOfAction: "some action type",
          //     comments: "some coments",
          //     userRequested: "userId"
          //   }
          // ]
        }
      },
      {
        title: "Some Doc2",
        id: "someDocId",
        url: "https://someLink.com",
        source: "Confluence",
        lastModified: "someDate",
        concerningParts: ["some part id"],
        interactions: {
          isLinkUpToDate: true,
          comments: [
            {
              text: "some coment",
              type: "requestOrSimpleComment",
              user: "someUserId",
              date: "someDate",
              flag: ["add another flag", "add another flag"],
              openRequest: {
                type: "type of request",
                requestFrom: "otherUserId"
              }
            }
          ]
        }
      }
    ]
    // initials: [],
    // technologies: []
  }
}