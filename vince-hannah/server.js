'use strict';

const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

// REVIEW: POST route needs to parse the body passed in with the request.
// POST middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));
//Our files are in a public directory now so that we only expose the files we want users to download. Express.js serves our local files by first checking the public directory for a match to the request, then it continues on to the below instructions if need be
app.post('/articles', (request, response) => {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.status(201).json(request.body);
});

app.listen(PORT, function() {
  console.log('listening on port', PORT);
});