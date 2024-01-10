const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true },
  timestamp: { type: Date, default: Date.now, index: true },
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
