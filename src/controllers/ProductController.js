const Product = require("../models/productModel");

class ProductController {
    async index(req, res) {
        try {
            const product = await Product.findAll();
            const imageUrls = ["/src/assets/images/single-product/2.jpg"];

            // Gán đường dẫn hình ảnh cho từng sản phẩm
            const productData = product.map((product, index) => {
                const productValues = product.dataValues;
                productValues.imageUrl = imageUrls[index % imageUrls.length]; // Chia sẻ đường dẫn hình ảnh
                return productValues;
            });

            // Truyền dữ liệu vào view
            res.render("product", { product: productData });
        } catch (error) {
            console.error("Lỗi khi lấy sản phẩm:", error);
            res.status(500).send("Lỗi Server");
        }
    }
}

module.exports = new ProductController();
