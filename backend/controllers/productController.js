const Product = require('../models/porduct')
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncError = require('../middlewares/catchAsyncError')
const APIFeatures = require('../utils/apiFeatures')
//Create new Product => /api/v1/product/new

exports.newProduct = catchAsyncError(async (req, res, next) => {
    const product = await Product.create(req.body)
    res.status(201).json({
        success: true,
        product
    })
})
//Get all Products => /api/v1/products
exports.getProducts = catchAsyncError(async (req, res, next) => {
    const resultPerPage = 4
    const productCount = await Product.countDocuments()
    const apiFeatures = new APIFeatures(Product.find(), req.query)
        .search()
        .filter()
        .pagination(resultPerPage)
    const products = await apiFeatures.query
    if (!products) {
        return next(new ErrorHandler('Product not found', 404))
    }
    res.status(200).json({
        success: true,
        count: products.length,
        productCount,
        data: products
    })
})
//Get single Product => /api/v1/product/:id

exports.getSingleProduct = catchAsyncError(async (req, res, next) => {
    const productId = req.params.id
    const product = await Product.findById(productId)
    if (!product) {
        return next(new ErrorHandler('Product not found', 404))
    }
    res.status(200).json({
        success: true,
        data: product
    })
})

//Update single Product => /api/v1/product/:id

exports.updateProduct = catchAsyncError(async (req, res, next) => {
    const productId = req.params.id
    let product = await Product.findById(productId)
    if (!product) {
        return next(new ErrorHandler('Product not found', 404))
    }
    product = await Product.findByIdAndUpdate(productId, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })
    res.status(200).json({
        success: true,
        data: product
    })
})

//Delete Product Product => /api/v1/product/:id

exports.deleteProduct = catchAsyncError(async (req, res, next) => {
    const productId = req.params.id
    let product = await Product.findById(productId)
    if (!product) {
        return next(new ErrorHandler('Product not found', 404))
    }
    await product.remove()

    res.status(200).json({ status: true, message: 'Product deleted' })
})