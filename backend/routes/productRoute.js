const exrpess = require("express");
const {
  addProduct,
  listProducts,
  removeProduct,
  singleProduct,
} = require("../controllers/productController");
const upload = require("../middleware/multer");
const adminAuth = require("../middleware/adminAuth");

const productRouter = exrpess.Router();

productRouter.post("/add",adminAuth,upload.fields([
    { name:"image1", maxCount:1 },
    { name:"image2", maxCount:1 },
    { name:"image3", maxCount:1 },
    { name:"image4", maxCount:1 },
  ]),addProduct
);
productRouter.delete("/remove", adminAuth, removeProduct);
productRouter.get("/single", singleProduct);
productRouter.get("/list", listProducts);

module.exports = productRouter;
