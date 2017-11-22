'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/node-controller');

router.get('/', controller.get);
router.get('/:slug', controller.getBySlug);
router.post('/', controller.post);
router.put('/:slug', controller.put);
router.delete('/:slug', controller.delete);

module.exports = router;
