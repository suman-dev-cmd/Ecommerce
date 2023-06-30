const app = require('./app')
const connectDatabase = require('./config/database')
const dotenv = require('dotenv')
//Handle Uncaught Exception
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`)
    console.log(`Shutting down due to uncaught exception`);
    process.exit(1)
})
//setting up config file

dotenv.config({ path: './config/config.env' })

//Connecting the Database

connectDatabase()

const server = app.listen(process.env.PORT, () => {
    console.log(`Server started PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
})

//Handle Unhandled Promise rejections
process.on('unhandledRejection', err => {
    console.log(`ERROR: ${err.message}`)
    console.log('Shutting down the server due to Unhandled Promise rejection')
    server.close(() => {
        process.exit(1)
    })
})