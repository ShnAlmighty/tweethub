const express = require('express');
const userController = require('../controllers/user');
const authenticateUser = require('../middlewares/auth');

const router = express.Router();

router.get('/me', authenticateUser, userController.getUserInfo);
router.get('/followers', authenticateUser, userController.getFollowerCount);
router.get('/users', authenticateUser, userController.getAllUsers);
router.post('/follow/:id', authenticateUser, userController.followUser);

module.exports = router;
