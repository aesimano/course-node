const express = require("express");
const router = express.Router();
const storeController = require("../controllers/storeController");

router.get("/", storeController.homePage);

// Do work here
// router.get("/", (req, res) => {
//   // res.send('Hey! It works!');
//   // const dreson = { name: "dawg", this: "that", cool: true };
//   // res.json(dreson);
//   // res.send(req.query);
//   // res.sendfile("views/hello.html");
//   res.render("hello", { title: "dre's best stuff", name: req.query.name });
// });

// // example
// router.get("/reverse/:name", (req, res) => {
//   const reverse = [...req.params.name].reverse().join("");
//   res.send(reverse);
// });

module.exports = router;
