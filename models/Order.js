const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  items: { type: [Schema.Types.Mixed], required: true },
  totalAmount: {
    type: Number,
    required: true,
  },
  totalItems: {
    type: Number,
    required: true,
  },
  user: {
    type: Schema.ObjectId,
    ref: 'Users',
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'pending',
  },
  selectedAddress: {
    type: Schema.Types.Mixed,
    required: true,
  },
});

const virtual = orderSchema.virtual('id');
virtual.get(function () {
  return this._id;
});

orderSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

exports.Order = mongoose.model('Order', orderSchema);
