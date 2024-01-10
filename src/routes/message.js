const express = require('express');
const messageController = require('../controllers/message');
const authenticateUser = require('../middlewares/auth');

const router = express.Router();

router.post('/postmessage', authenticateUser, messageController.postMessage);
router.get('/getmyfeed', authenticateUser, messageController.getMyFeed);

module.exports = router;
