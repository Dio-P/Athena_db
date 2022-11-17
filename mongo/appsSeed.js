use appsDb
db.dropDatabase();

db.apps.insertMany([
    {
        name: "Optimo",
        type: "App",
        briefDescr: "this is the optimo app, the best app in the world",
        depResposible: ["DPub"],
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
            isLinkUpToDate: true
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