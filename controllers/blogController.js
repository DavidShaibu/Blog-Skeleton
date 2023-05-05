// blog_index, blog_details, blog_create_get, blog_create_post, blog_delete
const Blog = require("../models/blog");
const mongoose = require("mongoose");

const blog_index = (req, res) => {
    Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("blogs/index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => console.log(err));
};

const blog_details = (req, res) => {
    console.log(req.params.id, typeof req.params.id);
  
    const ObjectId = mongoose.Types.ObjectId;
    const blogId = req.params.id;

    if (ObjectId.isValid(blogId)) {
    const objectId = new ObjectId(blogId);

    Blog.findById(blogId)
    .then((result) => {
      res.render("blogs/details", { blog: result, title: "Blog Details" });
    })
    .catch((err) => console.log(err));
    console.log(objectId);
    } else {
    console.log('Invalid ObjectId line 74');
    }
};

const blog_create_get = (req, res) => {
    res.render("blogs/create", { title: "Create a new Blog" });
};

const blog_create_post = (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
      .then(result => {
        res.redirect('/blogs');
      })
      .catch(err => {
        console.log(err);
      });
};

const blog_delete = (req, res) => {
    const ObjectId = mongoose.Types.ObjectId;
    const blogId = req.params.id;

    if (ObjectId.isValid(blogId)) {
    const objectId = new ObjectId(blogId);
    Blog.findByIdAndDelete(blogId)
      .then((result) => {
      res.json({ redirect: "/blogs" });
      })
      .catch((err) => console.log(err));
    } else {
    console.log('Invalid ObjectId line 94');
    }
}

module.exports ={
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete,
};