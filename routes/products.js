const express = require("express");
const router = express.Router();

const { getallProducts, getallProductsTest } = require("../controllers/order");

router.route("/").get(getallProducts);
router.route("/test").get(getallProductsTest);

module.exports = router;
