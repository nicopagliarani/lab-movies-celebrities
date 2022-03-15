// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here
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