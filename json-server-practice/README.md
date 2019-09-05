In this folder you'll find a simple JSON file filled with data matching the schemas from ```../demo-api-server```.

You can use this folder to get a feel for how RESTful API's work (using [json-server](https://github.com/typicode/json-server)), and how NoSQL databases (ie. Mongo) store data:
1. navigate to this directory in your terminal
1. ```npm install -g json-server```
1. ```json-server --watch db.json```
1. open [Postman](https://www.getpostman.com/)
1. practice calling a RESTful API at ```localhost:3000```
    * check the [routes documentation](https://github.com/typicode/json-server#routes) for json-server
    * keep ```db.json``` open in your editor, watch it change with each API call!

---

So what does this have to do with anything?

The ```db.json``` file is like your Mongo.db database, just objects and arrays of data!  If you keep this image in mind while you build your RESTful API it will be much easier to understand what is happening.


The rest of the code in ```../demo-api-server``` is designed behave (almost) the same as ```json-server```.  Meaning that if you write your API correctly and open it in Postman, you wouldn't know if it was your code or ```json-server``` behind localhost!
The current demo has a few routes that don't match ```json-server```.  can you figure out which ones they are? One of your assignments is to make sure that your API is indistinguishable from ```json-server```,

---
---
### <a href="https://hackyourfuture.be" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/63941625-4c7c3d00-ca6c-11e9-9a76-8d5e3632fe70.jpg" width="100" height="100" alt="Hack Your Future: Belgium"></img></a>







