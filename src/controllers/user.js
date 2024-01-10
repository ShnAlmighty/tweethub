const User = require('../models/user');

const followUser = async (req, res) => {
  try {
    const userToFollowID = req.params.id;
    const currentUser = req.user;

    if(currentUser._id == userToFollowID){
      throw new Error('Narcissist Found!')
    }

    const userToFollow = await User.findById(userToFollowID);
    if (!userToFollow) {
      throw new Error('User not found');
    }

    const alreadyFollowing = currentUser.following.includes(userToFollow._id);
    if(alreadyFollowing){
      throw new Error('You are already following this user');
    }

    currentUser.following.push(userToFollow._id);
    await currentUser.save();

    res.send({ message: 'You are now following the user' });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getFollowerCount = async function (req, res) {
  try {
    const count = await User.countDocuments({ following: req.user._id });
    res.send({ count });
  } catch(error){
    res.status(400).send(error.message);
  }
};

const getAllUsers = async(req, res) => {
  try {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const users = await User.find({})
    .sort('-created_at')
    .skip((page - 1) * limit)
    .limit(limit)
    .select('username _id')
    .lean();
    res.send({ users });
  } catch(error){
    res.status(400).send(error.message);
  }
}

module.exports = { 
  followUser,
  getFollowerCount,
  getAllUsers
};
