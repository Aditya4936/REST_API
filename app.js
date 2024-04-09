require("dotenv").config();
const express = require("express");
const app = express();
const coonectDB = require("./database/connect");

const PORT = process.env.PORT || 3000;

const products_routes = require("./routes/products");
const { config } = require("dotenv");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//router
app.use('/api/products', products_routes);

const start = async () => {
  try {
    await coonectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`${PORT} Connected`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
