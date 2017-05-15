var mongoose = require('mongoose');
var Person = mongoose.model("Person");

module.exports = {

    show: function(req, res) {
        Person.find({}, function(err, people){
            if(err){
                console.log("something went wrong");
                console.log(err);
                res.json(Person.errors);
            }
            else{
                console.log("getting people");
                console.log(people);
                res.json(people);
            }
        })

    },

    showByName: function(req, res) {
        Person.findOne({name: req.params.name}, function(err, person){
            if(err){

                console.log("something went wrong");
                console.log(err);
                res.json(Person.errors);
            }
            else{
                console.log("getting name");
                console.log(req.params.name);
                console.log(person);
                res.json(person);
            }
        })

    },


    create: function(req, res) {

        var person = new Person({name: req.params.name});

        person.save(function(err){
            if(err){
                console.log("something went wrong");
                console.log(err);
                res.json(person.errors);
            }
            else{
                console.log("person created");
                res.redirect("/");
            }
        })
    },


    destroy: function(req, res) {

        Person.remove({name: req.params.name}, function(err){
            if(err){
                console.log("something went wrong");
                console.log(err);
                res.json(Person.errors);
            }
            else{
                console.log("person deleted");
                res.redirect("/");
            }
        })
    },
}
