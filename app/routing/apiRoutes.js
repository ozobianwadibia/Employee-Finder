const employees = require('../data/employees.js');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
    // GET Request

    app.get("/api/employees", function(req, res) {
        res.json(employees);
    });

    // POST Request
    // Responds with success: true or false if successful
    app.post("/api/employees", function(req, res) {

        // Checks to make sure every property on the req.body is also on sampleTable
        // If it's not, returns with success: false and exits the function
        for (let key in req.body) {
            if (!employees.hasOwnProperty(key)) {
                return res.json({ success: false });
            }
        }

        // Otherwise, add it to the waitingList
        employees.push(req.body);

        // Send back a confirmation the POST was successfully processed to end the response
        res.json({ success: true });
    });

}