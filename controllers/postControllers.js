const Post = require("../models/Post");

//tüm postları getir
exports.getAllPost = async (req, res) => {
  const posts = await Post.find({});
  res.render("./index", {
    posts,
  });
};

//tekil postları getir
exports.getPost = async (req, res) => {
  const posts = await Post.findById(req.params.id);
  res.render("./post", {
    posts,
  });
};

//POST YARATMA
exports.createPost = async (req, res) => {
  await Post.create(req.body);
  res.redirect("/");
};

//POST DÜZENLEME


exports.updatePost=async (req,res)=>{
    const posts=await Post.findOne({_id:req.params.id});
    posts.title=req.body.title;
    posts.detail=req.body.detail;
    posts.save();
    res.redirect(`/posts/${req.params.id}`);
};

exports.deletePost=async (req,res)=>{
    await Post.findByIdAndRemove(req.params.id);
    res.redirect('/');
};