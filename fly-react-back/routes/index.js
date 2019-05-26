const express = require('express');
const router  = express.Router();
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const User = require ('../models/user')
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// router.post('/doiexist', (req,res,next) => {
//   console.log(req.body, 3434343443)
//   User.
//   res.end()
// })

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://salapjaka.auth0.com/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: 'ANaI-EgkaTw1CYEY-xoRgf_q9XjGTaij',
  issuer: `https://salapjaka.auth0.com/`,
  algorithms: ['RS256']
});

module.exports = router;
