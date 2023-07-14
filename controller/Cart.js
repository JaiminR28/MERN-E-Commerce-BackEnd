const { Cart } = require('../models/Cart');

exports.fetchCartByUser = async (req, res) => {
  const { user } = req.query;
  try {
    const UserCart = await Cart.find({ user: user })
      .populate('user')
      .populate('product');

    if (UserCart) {
      res.status(200).json(UserCart);
    }
  } catch (error) {
    res.status(400).json({
      status: 'No Cart Items',
      error,
    });
  }
};

exports.addToCart = async (req, res) => {
  try {
    const cartItem = new Cart(req.body);
    await cartItem.save();
    const result = await cartItem.populate('product');

    if (result) {
      res.status(201).json(result);
    }
  } catch (error) {
    res.status(400).json({
      status: 'error',
      error,
    });
  }
};

exports.deleteFromCart = async (req, res) => {
  const { id } = req.params;
  try {
    const cartItem = await Cart.findByIdAndDelete(id);

    res.status(201).json(cartItem);
  } catch (error) {
    res.status(400).json({
      status: 'error',
      error,
    });
  }
};

exports.updateCart = async (req, res) => {
  try {
    const { id } = req.params;
    const cartItem = await Cart.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (cartItem) {
      res.status(200).json(cartItem);
    }
  } catch (error) {
    res.status(400).json({
      status: 'error',
      error,
    });
  }
};
