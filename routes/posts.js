const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Welcome to  uzi customers");
});

module.exports = router;
