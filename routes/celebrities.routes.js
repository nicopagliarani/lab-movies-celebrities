// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");
const mongoose = require("mongoose");


// all your routes here
router.get("/celebrities", async (req, res) => {
    try {
        const listAllCelebrities = await Celebrity.find();
        res.render("../views/celebrities/celebrities", { allTheCelebrities:listAllCelebrities });    
    } catch (err) {
        console.error(err);
    }
});

router.get("/celebrities/create", (req, res) => {
  res.render("celebrities/new-celebrity");
});
router.post("/celebrities/create", async (req, res) => {
  // console.log(req.body);
  try {
    const userCreatedCelebrity = new Celebrity({
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase,
    });

    await userCreatedCelebrity.save();
    res.redirect("/celebrities");
  } catch(err) {
    console.error(err);
    res.render("celebrities/new-celebrity");
  }
});

module.exports = router;
