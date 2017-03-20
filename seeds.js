var mongoose = require("mongoose"),
    Gallery  = require("./models/photogallery.js"),
    Comment  = require("./models/comment.js");

var photos = [
    {author: 1, image:"https://source.unsplash.com/DgtRKZOOE0w/1600x900", description: "This is description" },    
    {author: 2, image:"https://source.unsplash.com/N-sxA8vEGDk/1600x900", description: "This is description" },    
    {author: 3, image:"https://source.unsplash.com/3_TuRDGfPUs/1600x900", description: "This is description" },    
    {author: 4, image:"https://source.unsplash.com/lSE4wkEnbWc/1600x900", description: "This is description" },    
    {author: 5, image:"https://source.unsplash.com/WLo5xdAvuHo/1600x900", description: "This is description" },    
    {author: 6, image:"https://source.unsplash.com/7nrsVjvALnA/1600x900", description: "This is description" },
    {author: 7, image:"https://source.unsplash.com/gwT4rs_xlUA/1600x900", description: "This is description" },    
    {author: 8, image:"https://source.unsplash.com/sBvK15KlpYk/1600x900", description: "This is description" },    
    {author: 9, image:"https://source.unsplash.com/sBvK15KlpYk/1600x900", description: "This is description" },    
    {author: 10, image:"https://source.unsplash.com/fdYWSfH8N6Y/1600x900", description: "This is description" },    
    {author: 11, image:"https://source.unsplash.com/eJDvLMiqiS4/1600x900", description: "This is description" },    
    {author: 12, image:"https://source.unsplash.com/vFoaTZNKoVc/1600x900", description: "This is description" }
];



function seedDB(){
    // remove all photos
    Gallery.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("Remove photo gallery!!");
        // add new photos
        photos.forEach(function(seed){
            Gallery.create(
                seed,
                function(err, photo){
                    if(err) {
                        console.log(err);
                    } else {
                        Comment.create({
                            name: "Shelley",
                            text: "This is good photo!!"
                        }, function(err, comment){
                            photo.comments.push(comment);
                            photo.save();
                            console.log(photo);
                        });
                    }
                }
            );    
        });
    });
    
    
};

module.exports = seedDB;
