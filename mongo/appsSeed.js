use apps_db
db.dropDatabase();

// change apps to include also terms and technologies
db.apps.insertMany(
  [
    {
      name: "optimo",
      type: "app",
      gitHubRepo: "someLink.github.com",
      briefDescr: "this is the optimo app, the best app in the world",
      teams: ["DPub"],
      // facing: {
      //   user: true,
      //   audience: false,
      // },
      folders: [
        {
          name: "general documentation",
          id: 0
         },
        {
         name: "client",
         id: 1
        },
        {
         name: "server",
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
          // appParent: "optimo",
        },
        {
          name: "published postgres",
          id: "somePartId2",
          ghRepo: "www.someGitHubLink.com",
          type: "data base",
          folderToBeDisplayedIn: "1",
          // appParent: "optimo",
          // RelevantConnections: {
          //   technologiesUsed: [
          //     "dbThingId1",
          //     "dbThingId2"
          //   ],
          //   relevantTerms: [
          //     "termOrInitialIdFromDb1",
          //     "termOrInitialIdFromDb2",
          //   ]
          // }
        }
      ],
      connections: [
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
      // Connections could be like folders and referenced in apps and parts
      // the available connections need to be only apps (top level) to avoid confusion
      // There could be a connection object within every part or app
      // {
      //   0: {
      //   connectedAppId: "someConnectingAppOrPartCustomID",
      //   connectedAppName: "some name"
      // },
      //   1: {
      //   connectedAppId: "someConnectingAppOrPartCustomID",
      //   connectedAppName: "some name"
      // },
      //   2: {
      //   connectedAppId: "someConnectingAppOrPartCustomID",
      //   connectedAppName: "some name"
      // },,
      // }
      // The bellow could be within every part or app
      // connectedWith: {
      //   appConnectedWith: 0,
      //   typeOfConnection: "reseives",
      //   shortDescription: "It does this and transfers that"
      // },
      properties: {
        docs: [
          {
            name: "Some Doc1",
            url: "https://someLink.com",
            id: "someDocId",
            source: "Confluence",
            lastModified: "someDate",
            concerningParts: ["somePartId1", "somePartId2"],
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
            name: "Some Doc2",
            id: "someDocId",
            url: "https://someLink.com",
            source: "Confluence",
            lastModified: "someDate",
            concerningParts: ["somePartId1", "somePartId2"],
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
  ]
)