var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    Gallery     = require("./models/photogallery.js"),
    seedDB      = require("./seeds.js");

mongoose.connect("mongodb://localhost/photo_gallery");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
seedDB();


app.get("/", function(req, res){
    res.render("home");
});

app.get("/gallery", function(req, res){
    Gallery.find({}, function(err, allPhotos){
        if(!err){
            res.render("gallery", {photos: allPhotos});     
        }
    });
});

app.post("/gallery", function(req, res){
    var author = req.body.author;
    var image = req.body.image;
    var description = req.body.description;
    Gallery.create(
        {author: author, image: image, description: description},
        function(err, photo){
            if(!err){
                console.log(photo);
            }
        }
    );
    res.redirect("gallery");
});

app.get("/gallery/new", function(req, res){
    res.render("addPhoto");
});

app.get("/gallery/:id", function(req, res){
    Gallery.findById(req.params.id).populate("comments").exec(function(err, foundPhoto){
        if(!err){
            res.render("show", {photo: foundPhoto});     
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!");
});