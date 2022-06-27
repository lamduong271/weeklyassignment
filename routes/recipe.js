var express = require("express");
var router = express.Router();
var uuid = require("uuid");
var allRecipes = [
  {
    name: "suon",
    ingredient: "thit heo",
    instruction: "xao len",
  },
];
/* GET users listing. */

router.get("/", function (req, res, next) {
  const food = allRecipes;
  if (food.length > 0) {
    res.render("index", { allRecipes: allRecipes });
  }
  res.render("index", { allRecipes: allRecipes });
});

router.get("/:food", function (req, res, next) {
  const food = allRecipes.find((item) => item.name === req.params.food);
  if (food) {
    res.render("food", { food });
  }
  res.render("food", { food });
});

router.post("/", function (req, res, next) {
  const { recipeName, recipeIngredient, recipeInstruction } = req.body;
  if (!recipeName || !recipeIngredient || !recipeInstruction) {
    res.status(400).json({ message: "check input" });
  }
  var recipe = {
    id: uuid.v1(),
    name: req.body.recipeName,
    ingredient: req.body.recipeIngredient,
    instruction: req.body.recipeInstruction,
  };
  allRecipes.push(recipe);
  res.render("index", { allRecipes: allRecipes });
});
module.exports = router;
