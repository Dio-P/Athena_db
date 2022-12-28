

const appsModel = () => {
  appsCollection
      .findOne({ name: name })
      .then((doc) => {
        console.log("doc", doc);
        return res.json(doc);
      })
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      }); 
}