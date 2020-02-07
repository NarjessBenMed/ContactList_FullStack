const express = require("express");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const contacts = require("./routes/api/contacts");
const app = express();

app.use(bodyParser.json());
const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected with success "))
  .catch(err => console.log(err));

app.use("/api/contacts", contacts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is started on port  ${port}`));
