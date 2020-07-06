'use strict';
const express =  require('express');
const router = express.Router();
const Controller = require('./controller');

router.get('/posts', Controller.getPosts);

module.exports = router;