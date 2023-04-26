const express = require("express");
const routes =  require('./routers/PropertyList.js');
const connect = require('./database/mongodb.js')

const app = express();

app.use(express.json());
//accept body
app.use(express.urlencoded({ extended: true }));


const  PORT = 1444;

app.use("/api/v1", routes);
connect();

app.listen(PORT, () => {
  console.log('runnig', PORT)
})