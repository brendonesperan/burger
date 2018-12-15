var express = require("express");

// Import the model (burger.js) to use its database functions.
var burger = require('../models/burger.js')

// Create Routes for app
var router = express.Router();

// route for retrieving data
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        }
        console.log(hbsObject);
        console.log("Data has been rendered");
        res.render("index", hbsObject);
    })
})

// route for posting new data
router.post("/api/burgers", function(req, res) {
    burger.insert([
        "burger_name"
    ],[
        req.body.name
      ], function(result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
      });    
})

// route for removing data
router.delete("/api/burgers/:id", function(req, res) {

    // create condition
    var condition = req.params.id;

    burger.update(condition, function(result) {
        if (result.affectedRows == 0) {
            // Standard way of saying it worked: If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }      
    })
})

// Export routes for server.js to use.
module.exports = router;