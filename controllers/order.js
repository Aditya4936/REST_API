const Product = require("../models/models");

const getallProducts = async (req, res) => {
  const { company, name,feature } = req.query;
  const queryObject = {};

  if (company) {
    queryObject.company = company;
  }
  if (feature) {
    queryObject.feature = feature;
  }

  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  console.log(queryObject);
  const data = await Product.find(queryObject);
  res.status(200).json({ data });
};

const getallProductsTest = async (req, res) => {
  const data = await Product.find(req.query).sort("-name price");
  res.status(200).json({ data });
};

module.exports = { getallProducts, getallProductsTest };
