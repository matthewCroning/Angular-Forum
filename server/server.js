const post = require("./models/post");
const thread = require("./models/thread");

const express       = require("express"),
      app           = express(),
      bodyParser    = require("body-parser"),
      mongoose      = require("mongoose"),
      User        = require("./models/user");

const authRoutes    = require("./routes/auth"),
      threadRoutes = require("./routes/threads");
      postRoutes = require("./routes/posts");  

const PORT = process.env.PORT || '3001';

app.listen(PORT, function(){
});

app.use(bodyParser.json());
app.use("/api/v1/users", authRoutes);
app.use("/api/v1/thread", threadRoutes);
app.use("/api/v1/post", postRoutes);

mongoose.connect("mongodb://localhost:27017/forum").then(() => {
    console.log("mongoose logged in");
    console.log("Node server started on port " + PORT);
    // this.user1 = new User({username: "Filip", email: "filip@gmail.com", password: "filipfilip"});
    // this.thread1 = new thread({title: "Thread title", user: this.user1});
    // this.post1 = new post({title: "Post Title", content: "Content"});
   
    // this.thread1.posts.push(this.post1);
    // this.post1.user = this.user1;
    // this.post1.thread = this.thread1;
    // //console.log("User\n" + this.user1);
    // //console.log("Thread\n" + this.thread1);
    // //console.log("Post\n" + this.post1);
    // this.user1.save();
    // this.thread1.save();
    // this.post1.save();
});