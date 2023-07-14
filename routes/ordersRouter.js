const express = require('express');

const {
  createOrder,
  fetchOrderByUser,
  deleteOrder,
  updateOrder,
  fetchAllOrders,
} = require('../controller/Order');

const router = express.Router();

router
  .post('/', createOrder)
  .get('/user/:userId', fetchOrderByUser)
  .delete('/:id', deleteOrder)
  .patch('/:id', updateOrder)
  .get('/', fetchAllOrders);

exports.router = router;
