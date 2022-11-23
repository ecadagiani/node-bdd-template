const express = require('express');
const userController = require('./controllers/userController');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('hello');
});
router.get('/ping', (req, res) => {
  res.send('pong');
});
router.get('/users', userController.getAllUser);

module.exports = router;
