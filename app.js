const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

var routes = require('./api/routes/testRoutes'); //importing route
routes(app); //register the route

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
