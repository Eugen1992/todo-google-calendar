const express = require('express');
const router = express.Router();
const path = require('path');

/* GET home page. */
router.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../client/public', 'index.html'));
});

module.exports = router;
