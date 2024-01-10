const Message = require('../models/message');

const postMessage = async (req, res) => {
  try {
    const { content } = req.body;
    const message = new Message({ content, author: req.user._id.toString() });
    await message.save();

    res.status(201).send({ message });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getMyFeed = async (req, res) => {
  try {
    const user = req.user;
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;

    const userFeed = await Message.find({ author: { $in: [user._id, ...user.following] } })
      .sort('-timestamp')
      .skip((page - 1) * limit)
      .limit(limit)
      .lean()
      .populate('author', 'username');

    res.send({ userFeed });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { postMessage, getMyFeed };
