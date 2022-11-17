import express from 'express';
import { ObjectID  } from 'mongodb';
import addNewUnit from './addNewUnit.js';
import { db } from '../server.js';
import fetch from 'node-fetch';


const createRouter = function (eventsCollection, unitsCollection, artifactsCollection) {
    const router = express.Router();
  
    router.get('/events', (req, res) => {
      eventsCollection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
    });

    router.get('/units', (req, res) => {
      unitsCollection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
    });

    router.get('/artifacts', (req, res) => {
      artifactsCollection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
    });
  
    router.get('/events/:title', (req, res) => {
      const title = req.params.title;
      eventsCollection
      .findOne({ title: title })
      .then((doc) => {
        console.log("doc", doc);
        return res.json(doc);
      })
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
    });

    router.get('/artifacts/:title', (req, res) => {
      const title = req.params.title;
      artifactsCollection
      .findOne({ artifactName: title })
      .then((doc) => res.json(doc))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
    });

    router.get('/units/:title', (req, res) => {
      const unitName = req.params.title;
      unitsCollection
      .findOne({ unitName: unitName })
      .then((doc) => res.json(doc))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
    });
  
    // Newer version of Mongodb put request - doesnt give back ops object anymore
    router.post('/', (req, res) => {
      const newData = req.body;
      eventsRouter
      .insertOne(newData)
      .then((result) => {
        return eventsRouter.findOne({ _id: result.insertedId })
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
      eventsRouter
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
      eventsRouter
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

    router.post('/addNewBlockOfEveryType', async(req, res) => {
      let adding = await addNewUnit(req);
      addingAllNewThings(adding, eventsCollection, unitsCollection, artifactsCollection)
      //1. A logic which will populate the event's connection with the connection id instead of name
      //(do I need to have instead an object with both id and title)
        //looping over events to find by name
        //when find return the id
        //replace the name with id within the connection
      //2. a logic which populates the eventsIncluded array by getting data from the events DB
      //(what happens if a unit is being edited instead of added?)
      .then((result) => {
        res.json(result)
      })
  })
  
    return router;
  
  };
  
  export default createRouter;