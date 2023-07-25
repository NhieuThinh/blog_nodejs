const express = require('express');
const router = express.Router();

const newController = require('../app/controller/NewsController');

router.use('/:slug', newController.index);
router.use('/', newController.index);

module.exports=router;