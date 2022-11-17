use apps_db
db.dropDatabase();

db.apps.insertMany([
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
            link: "https://someLink.com",
            linkSource: "Confluence",
            linkCreationDate: "someDate",
            isLinkUpToDate: true,
            // flags {
            //   isLinkUpToDate: true,
            //   notes: [
            //  {
            //   text: "some coments about the document and if it is up to date",
            //   user: "someUserIdString"
            //  }]
            // }
          },
          {
            title: "Some Doc2",
            link: "https://someLink.com",
            linkSource: "Confluence",
            linkCreationDate: "someDate",
            isLinkUpToDate: false
          }
        ]
      }
])