const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.get('/api', ProductController.index);
    app.post('/api/product', ProductController.createProduct)
    app.get('/api/products', ProductController.getAllProduct)
    app.get('/api/products/:id', ProductController.getOneProduct)
    app.patch('/api/products/:id', ProductController.updateProduct)
    app.delete('/api/products/:id', ProductController.deleteProduct)
}

