const Product = require('../models/porduct')
const dotenv = require('dotenv')
const connectDatabase = require('../config/database')

const products = require('../data/products.json')
//Setting dot env file
dotenv.config({ path: '../config/config.env' })


connectDatabase()

const seedProducts = async () => {
    try {
        await Product.deleteMany();
        console.log('products are deleted')
        await Product.insertMany(products)
        console.log('products are added')
        process.exit()

    } catch (error) {
        console.log(error)
        process.exit()
    }
}

seedProducts()

