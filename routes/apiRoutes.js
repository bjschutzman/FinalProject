const axios = require("axios");
const router = require("express").Router();
const RecipeController = require("../controllers/RecipeController.js");

const APIONE = process.env.REACT_APP_COCKTAIL_API_KEY;
console.log(APIONE);

router.get("/drinks", (req, res) => {
  console.log("HIT DRINK ROUTE");
  const searchText = req.query.q;
  console.log("QUERY TEXT: ", searchText);
  const url = `https://www.thecocktaildb.com/api/json/v1/${APIONE}/search.php?s=${searchText}`;
  console.log("URLY", url);
  axios
    .get(url)
    .then(response => {
      // console.log('DATA FROM API', response);
      res.json(response.data);
    })
    .catch(err => res.status(422).json(err));
});

router.get("/drinks/:id", (req, res) => {
  console.log("HIT DRINK ROUTE");
  const searchText = req.query.q;
  console.log("QUERY TEXT: ", searchText);
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${searchText}`;
  console.log("URLY", url);
  axios
    .get(url)
    .then(response => {
      console.log("DATA FROM API", response);
      res.json(response.data);
    })
    .catch(err => res.status(422).json(err));
});

console.log(RecipeController);
router.route("/drinks").post(RecipeController.create);

router.route("/saved").get(RecipeController.findAll);

module.exports = router;
