var express = require('express');
var router = express.Router();
var companiesDal = require('../model/companies_dal');

router.get('/all', function(req, res) {
    companiesDal.GetAll(function (err, result) {
            if (err) throw err;
            res.render('Companies/displayAllCompanies.ejs', {rs: result});
        }
    );
});


router.get('/', function (req, res) {
    companiesDal.GetByID(req.query.CompanyID, function (err, result) {
        if (err) throw err;
        res.render('Companies/displayCompanyInfo.ejs', {rs: result, CompanyID: req.query.CompanyID});
    });
});


router.get('/create', function(req, res) {
    companiesDal.GetAll(function (err, result) {
            if (err) throw err;
            res.render('Companies/createNewCompanyForm.ejs', {rs: result});
        }
    );
});

router.get('/save', function(req, res, next) {
    console.log("The company name submitted was: " + req.query.CompanyName);
    console.log("The email submitted was: " + req.query.Email);
    console.log("The password submitted was: " + req.query.Password);
    shoppersDal.Insert(req.query, function(err, result){
        if (err) {
            res.send(err);
        }
        else {
            res.send("Your account was successfully created!");
        }
    });
});

module.exports = router;