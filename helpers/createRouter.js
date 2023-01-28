import express from 'express';
import { ObjectID  } from 'mongodb';
// import addNewUnit from './addNewUnit.js';
// import { db } from '../index.js';
// import fetch from 'node-fetch';

// const mockAppTest = {
//   name: "Optimo2",
//   type: "App",
//   briefDescr: "this is the optimo app, the best app in the world",
//   depResposible: ["DPub"],
//   facing: {
//     user: true,
//     audience: false,
//   },
//   connection: [
//     {
//     name: "Things-api",
//     id: "someString",
//     typeOf: "resievesFrom"
//     },
//     {
//       name: "Disco-api",
//       id: "someString",
//       typeOf: "resievesFrom"
//     }
//   ],
//   docs: [
//     {
//       title: "Some Doc1",
//       link: "https://someLink.com",
//       linkSource: "Confluence",
//       linkCreationDate: "someDate",
//       isLinkUpToDate: true
//     },
//     {
//       title: "Some Doc2",
//       link: "https://someLink.com",
//       linkSource: "Confluence",
//       linkCreationDate: "someDate",
//       isLinkUpToDate: false
//     }
//   ]
// }


const createRouter = function (appsCollection) {
    const router = express.Router();
  
    router.get('/apps', (req, res) => {
      appsCollection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
    });
  
    router.get('/apps/:name', (req, res) => {
      const name = req.params.name;
      appsCollection
      .findOne({ name: name })
      .then((doc) => {
        return res.json(doc);
      })
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
    });
  
    router.post('/', (req, res) => {
      // const newApp = mockAppTest;
      const newData = req.body;
      appsCollection
      .insertOne(newApp)
      .then((result) => {
        return appsCollection.findOne({ _id: result.insertedId })
      })
      .then((doc) => res.json(doc))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
    });
  
    router.delete('/:id', (req, res) => {
      const id = req.params.id;
      appsCollection
      .deleteOne({ _id: ObjectID(id) })
      .then(result => {
        res.json(result)
      })
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
    });
  
    router.put('/:id', (req, res) => {
      const id = req.params.id;
      const updatedData = req.body;
      // const updatedData = mockAppTest;
      appsCollection
      .updateOne(
        { _id: ObjectID(id)},
        { $set: updatedData }
      )
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
    });
  
    return router;
  
  };
  
  export default createRouter;