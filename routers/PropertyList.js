const express = require('express');
const router = express.Router();

const { propertyList } = require('../controllers/realEstateController.js')

router.route("/realestatepropertylist").get(propertyList);

module.exports = router;