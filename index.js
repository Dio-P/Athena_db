import express from 'express';
const app = express();
import cors from 'cors'
import { MongoClient }  from 'mongodb';

app.use(cors());
import createRouter from './helpers/create_router.js';

app.use(express.json());
export let db;
let eventsCollection;
let unitsCollection;
let artifactsCollection
export let apiRouter;

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
.then(client => {
  db = client.db('big_picture');
  eventsCollection = db.collection('events');
  unitsCollection = db.collection('units');
  artifactsCollection = db.collection('artifacts');
  apiRouter = createRouter(eventsCollection, unitsCollection, artifactsCollection);
  app.use('/api', apiRouter);
})
  app.listen(5051, function(){
    console.log(`app listening on port ${this.address().port}`);
})

app.post('/wikiData', wikiCall);


