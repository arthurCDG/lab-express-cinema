const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((allMoviesFetched) => {
      res.render("movies.hbs", { allMoviesFetched });
    })
    .catch((error) => console.error(error));
});

router.get("/movies/:id", (req, res, next) => {
  const id = req.params.id;
  Movie.findById(id)
    .then((singleMovieFetched) => {
      res.render("single-movie.hbs", { singleMovieFetched });
    })
    .catch((error) => console.error(error));
});

module.exports = router;
