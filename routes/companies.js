var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next)
{
    res.render('displayCompanyInfo.ejs');
});

router.get('/all', function(req,res, next){
    res.render('displayAllCompanies.ejs');
});

router.get('/create', function(req, res, next)
{
    res.render('createNewCompanyForm.ejs');
});

module.exports = router;