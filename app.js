const express = require("express");
const _ = require("lodash");
const morgan = require("morgan");
const mongoose = require("mongoose");
const { MongoClient, ObjectId } = require('mongodb');
const blogRoutes = require("./routes/blogRoutes.js");


// express app
const app = express();

//Connect to MongoDB
const dbURI =
  "mongodb+srv://DavidShaibu:test1234@node-tuts.kdtt6zs.mongodb.net/Blog-DB?retryWrites=true&w=majority";

//register view engine
app.set("view engine", "ejs");

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

//middleware and static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// routes
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("blogs/about", { title: "About" });
});

// blog routes
app.use("/blogs", blogRoutes);

//404 page
app.use((req, res) => {
  res.status(400).render("blogs/404", { title: "404" });
});
