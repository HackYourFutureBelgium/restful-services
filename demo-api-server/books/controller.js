const books = require('./model');

const controller = {};

// routes =>

/* ------------------- INDEX -------------------*/
// GET  "/"                     => greetings

controller.welcome = (req, res) => {
  console.log('-- GET /all --');
  res.send("hi, you're at the books api");
}

/* ------------------- INDEX -------------------*/
// GET  "/all"                     => show all books

controller.getAll = (req, res) => {
  console.log("-- GET /all --");
  books.find()
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
// POST "/add"                => Create new books

controller.getAdd = (req, res) => {
  console.log("-- GET /add --");
  res.send('put a new author\'s title in the body and send a post request to this address: { title: "string" }. you\'ll get back the new author\'s entry');
}

controller.postAdd = (req, res) => {
  console.log("-- POST /add --");
  const newTitle = req.body.title;
  const newAuthor = { title: newTitle };
  books.create(newAuthor)
    // modify the next line based on your project's needs
    .then((dbResponse) => { res.send(dbResponse) })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
}


/* ------------------- READ -------------------*/
// GET  "/:id"             => View books Info with id ...


controller.getId = (req, res) => {
  const authorId = req.params.id;
  console.log("-- GET /" + authorId);
  const idObject = { Id: authorId };
  books.find(idObject)
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
// POST "/:id/update"     => update books with id...


controller.getIdUpdate = (req, res) => {
  const authorId = req.params.id;
  console.log("-- GET /" + authorId + "/update --");
  res.send('send a post request to this address a title in the body');
}

controller.postIdUpdate = (req, res) => {
  const authorId = req.params.id;
  console.log("-- POST /" + authorId + "/update --");
  const idObject = { Id: authorId };
  const title = req.body.title;
  const titleObject = { title: title };
  books.update(idObject, titleObject)
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
// POST "/:id/delete"     => delete books with id...


controller.getIdDelete = (req, res) => {
  const authorId = req.params.id;
  console.log("-- GET /" + authorId + "/delete --");
  res.send('send a post request to this address with an author ID, it will be deleted');
}

controller.postIdDelete = (req, res) => {
  const authorId = req.params.id;
  console.log("-- POST /" + authorId + "/delete --");
  const idObject = { _id: authorId };
  books.remove(idObject)
    // modify the next line based on your project's needs
    .then((dbResponse) => { res.send(dbResponse) })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
}


module.exports = controller;
