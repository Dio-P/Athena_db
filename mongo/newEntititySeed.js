use apps_db
db.dropDatabase();

// change apps to include also terms and technologies
db.entities.insertMany(
  [
    {
      name: "optimo",
      type: "app", //team //department //part //service //technology 
      gitHubRepo: "someLink.github.com",
      slackChanel: "",
        // tags not as closed folders to display the parts in 
        //but as color changing display and filtering capability
      allTags :[
        "someTag", "someOtherTag"
      ], 
      briefDescription: "this is the optimo app, the best app in the world",
      teamsResponsible: ["DPub"], //automatically add the team of the parent.
      connections: {
        audienceFacing: false,
        receivesDataFrom: [
          //those could be internal or external entities, so we do need an id
          // the id could by build so to point to this app or another and make a call 
         // only if it points to another.
          {
            id: "some Entity id",
            name: "someEntityName",
            shortDescription: "what do the data do"
          },
        ], 
        givesDataTo: [
          {
            id: "some Entity id",
            name: "someEntityName",
            shortDescription: "what do the data do"
          },
        ],       
        
      },
      // can we have a value as depth level where the display could be filtered out against ?
      // (ex. I want to filter only dept1 I get the departments, depth2 teams, three apps) //would that lead to the silliness of having a big bbc entity to include all ?
      interactions: {
        isLinkUpToDate: true,
        comments: [
          {
            timeStamp: "some date and time",
            user: "some user Id or name"
          }
        ],
        requestAction: [
          {
            timeStamp: "some date and time",
            typeOfAction: "some action type",
            description: "some coments",
            userRequesting: "some user Id or name"
          }
        ]
      },
      children: [],
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