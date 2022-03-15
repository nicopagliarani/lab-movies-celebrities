const router = require("express").Router();


router.get("/", (req, res, next) => {
  res.render("index");
});
// router.get("/celebrities",(req,res,next)=>{
//   res.render("../views/celebrities/celebrities")
// });
router.use(require("./celebrities.routes.js"));
router.use(require("./movies.routes.js"));

module.exports = router;
