require("dotenv").config();
const connectDB = require("./database/connect");
const Product = require("./models/models");
const productjson = require("./products.json");

const start = async () => {
    try {
        console.log("success")
        await connectDB(process.env.MONGODB_URL)
        await Product.create(productjson);
    } catch (error) {
        console.log(error)
    }
};
start()