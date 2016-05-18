var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET about page*/
router.get('/about', function(req, res, next){
  res.render('about', {title: 'About'});
});

router.get('/authenticate', function(req, res) {
  shoppersDal.GetByEmail(req.query.email, req.query.password, function (err, account) {
    if (err) {
      res.send(err);
    }
    else if (account == null) {
      res.send("Shopper not found.");
    }
    else {
      res.send(account);
    }
  });
});

module.exports = router;
