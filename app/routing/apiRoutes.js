const employees = require('../data/employees.js');
// const express = require("express");

//routing
module.exports = function(app) {
    // GET Request
    app.get("/api/employees", function(req, res) {
        res.json(employees);
    });

    // POST Request
    app.post("/api/employees", function(req, res) {
        res.send(req.body);
        // Send back a confirmation the POST was successfully processed
        console.log("Item has posted");
        // res.json({ success: true });
    });

}