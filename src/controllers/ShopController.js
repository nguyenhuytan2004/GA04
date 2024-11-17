const Shop = require("../models/shopModel");

class ShopController {
    async index(req, res) {
        try {
            const products = await Shop.findAll();
            const imageUrls = [
                "/src/assets/images/products/5.jpg",
                "/src/assets/images/products/6.jpg",
                "/src/assets/images/products/7.jpg",
                "/src/assets/images/products/8.jpg",
                "/src/assets/images/products/4.jpg",
                "/src/assets/images/products/3.jpg",
            ];

            // Gán đường dẫn hình ảnh cho từng sản phẩm
            const productData = products.map((product, index) => {
                const productValues = product.dataValues;
                productValues.imageUrl = imageUrls[index % imageUrls.length]; // Chia sẻ đường dẫn hình ảnh
                return productValues;
            });

            // Truyền dữ liệu vào view
            res.render("shop", { shop: productData });
        } catch (error) {
            console.error("Lỗi khi lấy sản phẩm:", error);
            res.status(500).send("Lỗi Server");
        }
    }
}

module.exports = new ShopController();
