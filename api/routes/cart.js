const cartRoute = require("express").Router();
const CartController = require("../controllers/CartController");
const { auth } = require("../middlewares/auth");

cartRoute.get("/", CartController.getMyCarts);
cartRoute.post("/add", auth, CartController.add);
cartRoute.delete("/:id", auth, CartController.delete);

module.exports = cartRoute;