const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.json({ location: "HOME PAGE" })
});

// router.get('/login', (req, res, next) => {
//   res.json({ location: "LOG IN" })
// });

module.exports = router;
