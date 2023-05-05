// mongoose and mongo sandbox routes
app.get("/add-blog", (req, res) => {
    const blog = new Blog({
        title: "New Blog 2",
        snippet: "About my New Blog",
        body: "More about my new Blog"
    })
    blog.save()
     .then(result => {
        res.send(result);
     })
     .catch(err => console.log(err));
});

app.get("/all-blogs", (req, res) => {
    Blog.find()
     .then(result => {
        res.send(result);
     })
     .catch(err => console.log(err));
});

app.get("/single-blog", (req, res) => {
    Blog.findById("6453b213adc5763ab7402998")
      .then((result) => {
        res.send(result);
      })
      .catch((err) => console.log(err));
  });


  /*
app.delete("/blogs/:id", (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
      .then(result => {
        res.json({redirect: "/blogs"});
      })
      .catch(err => console.log(err));
});
*/

// router.post("/", (req, res) => {
//     const blog = new Blog(req.body);
//     blog
//       .save()
//       .then((result) => {
//         res.redirect("/blogs");
//       })
//       .catch((err) => console.log(err));
//   });