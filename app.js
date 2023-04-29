const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const path = require("path");
const app = express();
const methodOverride = require("method-override");
//post modelini import edelim
const Post = require("./models/Post");
//CONTROLLERİ IPMORT EDIOYORUZ
const postContorller = require("./controllers/postControllers");
const pageController = require("./controllers/pageController");
//TEMPLATE ENGINE
app.set("view engine", "ejs");

//DB CONNECTION
mongoose.connect("mongodb://127.0.0.1:27017/cleanblog-test-db");

//MIDDLEWARES
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);

app.get("/", postContorller.getAllPost);
app.get("/posts/:id", postContorller.getPost);
app.get("/about", pageController.aboutPage);
app.get("/add_post", pageController.addPostPage);
app.get("/posts/edit/:id", pageController.editPostPage);
app.put("/posts/:id", postContorller.updatePost);
app.post("/posts", postContorller.createPost);
app.delete("/posts/:id", postContorller.deletePost);

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu port ${port} den baslatildi`);
});
