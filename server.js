const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 4000;

// Sets up our server to parse our request body for usage
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets our server to use the public directory for static assets
app.use(express.static(path.join(__dirname, "app/public")));


require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);


// Starts the server.
app.listen(PORT, function() {
    console.log("Server is listening on PORT: " + PORT);
});