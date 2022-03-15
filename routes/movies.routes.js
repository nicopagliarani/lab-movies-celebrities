// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Movie = require("../models/Movies.model");
const Celebrity = require("../models/Celebrity.model");
const mongoose = require("mongoose");
const async = require("hbs/lib/async");
const movie = require("../models/Movies.model");

// all your routes here
router.get("/movies", async (req, res) => {
  const allmovies = await Movie.find();
  res.render("movies/movies.hbs", { allmovies });
});
router.get("/movies/create", (req, res) => {
    res.render("movies/new-movie");
  });
  router.post("/movies/create", async (req, res) => {
    // console.log(req.body);
    try {
      const userCreatedCelebrity = new Celebrity({
        title: req.body.title,
        genre: req.body.genre,
        plot: req.body.plot,
      });
      await userCreatedCelebrity.save();
    res.redirect("/celebrities");
  } catch(err) {
    console.error(err);
    res.render("celebrities/new-celebrity");
  }
});
module.exports = router;