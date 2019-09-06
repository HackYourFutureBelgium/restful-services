const authors = require('./model');

const controller = {};

// routes =>

/* ------------------- INDEX -------------------*/
// GET  "/"                     => greetings

controller.welcome = (req, res) => {
  console.log("-- GET /all --");
  res.send("hi, you're at the authors api");
}

/* ------------------- INDEX -------------------*/
// GET  "/all"                     => show all authors

controller.getAll = (req, res) => {
  console.log("-- GET /all --");
  authors.find()
    // modify the next line based on your project's needs
    .then((dbResponse) => { res.send(dbResponse) })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
}

/* ------------------- CREATE -------------------*/
// GET  "/add"                => instructions
// POST "/add"                => Create new authors

controller.getAdd = (req, res) => {
  console.log("-- GET /add --");
  res.send('put a new author\'s name in the body and send a post request to this address: { firstName: "string" }. you\'ll get back the new author\'s entry');
}

controller.postAdd = (req, res) => {
  console.log("-- POST /add --");
  const newName = req.body.firstName;
  const newAuthor = { firstName: newName };
  authors.create(newAuthor)
    // modify the next line based on your project's needs
    .then((dbResponse) => { res.send(dbResponse) })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
}


/* ------------------- READ -------------------*/
// GET  "/:id"             => View authors Info with id ...


controller.getId = (req, res) => {
  const authorId = req.params.id;
  console.log("-- GET /" + authorId + " --");
  const idObject = { _id: authorId };
  authors.find(idObject)
    // modify the next line based on your project's needs
    .then((dbResponse) => { res.send(dbResponse) })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
}



/* ------------------- UPDATE -------------------*/
// GET  "/:id/update"     => instructions
// POST "/:id/update"     => update authors with id...


controller.getIdUpdate = (req, res) => {
  const authorId = req.params.id;
  console.log("-- GET /" + authorId + "/update --");
  res.send('send a post request to this address a firstName in the body');
}

controller.postIdUpdate = (req, res) => {
  const authorId = req.params.id;
  console.log("-- POST /" + authorId + "/update --");
  const idObject = { Id: authorId };
  const firstName = req.body.firstName;
  const nameObject = { firstName: firstName };
  authors.update(idObject, nameObject)
    // modify the next line based on your project's needs
    .then((dbResponse) => { res.send(dbResponse) })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
}

/* ------------------- DELETE -------------------*/
// GET  "/:id/delete"     => instructions
// POST "/:id/delete"     => delete authors with id...


controller.getIdDelete = (req, res) => {
  const authorId = req.params.id;
  console.log("-- GET /" + authorId + "/delete --");
  res.send('send a post request to this address with an author ID, it will be deleted');
}

controller.postIdDelete = (req, res) => {
  const authorId = req.params.id;
  console.log("-- POST /" + authorId + "/delete --");
  const idObject = { Id: authorId };
  authors.remove(idObject)
    // modify the next line based on your project's needs
    .then((dbResponse) => { res.send(dbResponse) })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
}


module.exports = controller;
