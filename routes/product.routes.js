const router = require("express").Router();

var { fetchProductsV1 } = require("../controllers/product.controller");

router.get("api/products/v1/fetchproducts", fetchProductsV1);

module.exports = router;
