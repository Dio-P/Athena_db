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
      depResponsible: ["DPub"],
      facing: {
        user: true,
        audience: false,
      },
      folders: {
         0: { title : "general documentation" },
         1: { title : "client" },
         2: { title : "server" },
      },
      parts: [
        {
          name: "general documentation",
          id: "somePartId1",
          type: "documentation",
          ghRepo: "www.someGitHubLink.com",
          folderToBeDisplayedIn: "0",
        },
        {
          name: "published postgres",
          id: "somePartId2",
          type: "data base",
          ghRepo: "www.someGitHubLink.com",
          folderToBeDisplayedIn: "1",
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
      connection: [
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
      docs: [
        {
          title: "Some Doc1",
          url: "https://someLink.com",
          source: "Confluence",
          lastModified: "someDate",
          concerningPart: ["some part id"],
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
          url: "https://someLink.com",
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
        }
      ]
    }
  ]
)