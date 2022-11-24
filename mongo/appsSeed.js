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
      foldersToDisplay: [
        { 0: "general documentation"},
        { 1: "client"},
        { 2: "server"},
      ],
      includesParts: [
        {
          name: "general documentation",
          type: "documentation",
          RepoLink: ["www.someGitHubLink.com"],
          folderToBeDisplayedIn: "0",
        },
        {
          name: "published postgres",
          type: "data base",
          RepoLink: ["www.someGitHubLink.com"],
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
          creationDate: "someDate",
          concerningParts: ["some part"],
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
          creationDate: "someDate",
          concerningParts: ["some part"],
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