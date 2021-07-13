const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes')
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); //receieve json as request
app.use(express.urlencoded({extended: true})); // arrays and strings

//make public folder accessible
app.use(express.static("public"));

app.use(apiRoutes);
app.use(htmlRoutes);//html routes - html apis

app.listen(PORT, () => {
    console.log("listening on port: " + PORT);
});