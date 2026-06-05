const Order = require("../models/Order");

const createOrder = async (req, res) => {
  try {
    const { userId, items, totalAmount, address } = req.body;

    const order = await Order.create({
      userId,
      items,
      totalAmount,
      address,
    });

    res.status(201).json({
      message: "Order placed successfully ✅",
      order,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getUserOrders = async (req, res) => {
  try {
    const { userId } = req.params;

    const orders = await Order.find({ userId }).sort({
      createdAt: -1,
    });

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createOrder,
  getOrders,
  getUserOrders,
};