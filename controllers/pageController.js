const Post=require('../models/Post');
// about sayfasına yönlendirme 
exports.aboutPage=(req,res)=>{
    res.render('./about');
};

// add post sayfasına yönlendirme
exports.addPostPage=(req,res)=>{
    res.render('./add_post');
};

exports.editPostPage=async (req,res)=>{
    const posts= await Post.findById(req.params.id);
    res.render('./edit_post',{
        posts
    });
};