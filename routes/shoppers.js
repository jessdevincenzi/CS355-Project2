var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next)
{
    res.render('displayShopperInfo.ejs');
});

router.get('/all', function(req,res, next){
    res.render('displayAllShoppers.ejs');
});

router.get('/create', function(req, res, next)
{
    res.render('createNewShopperForm.ejs');
});

module.exports = router;
