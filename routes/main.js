const express = require('express');

const auth = require('../middleware/auth');
const { login, dashboard } = require('../controllers/main');

const router = express.Router();

router.route('/login').post(login);
router.route('/dashboard').get(auth, dashboard);

module.exports = router;
