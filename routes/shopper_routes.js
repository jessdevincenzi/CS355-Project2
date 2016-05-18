var express = require('express');
var router = express.Router();
var shoppersDal = require('../model/shoppers_dal');

router.get('/all', function(req, res) {
    shoppersDal.GetAll(function (err, result) {
            if (err) throw err;
            res.render('Shoppers/displayAllShoppers.ejs', {rs: result});
        }
    );
});


router.get('/', function (req, res) {
    shoppersDal.GetByID(req.query.ShopperID, function (err, result) {
        if (err) throw err;
        res.render('displayShopperInfo.ejs', {rs: result, ShopperID: req.query.ShopperID});
    });
});


router.get('/create', function(req, res) {
    shoppersDal.GetAll(function (err, result) {
            if (err) throw err;
            res.render('createNewShopperForm.ejs', {rs: result});
        }
    );
});

router.get('/save', function(req, res, next) {
    console.log("The name submitted was: " + req.query.Name);
    console.log("The username submitted was: " + req.query.Userame);
    console.log("The email submitted was: " + req.query.Email);
    console.log("The password submitted was: " + req.query.Password);
    shoppersDal.Insert(req.query, function(err, result){
        if (err) {
            res.send(err);
        }
        else {
            res.send("Your account was successfully created. Happy shoppings!");
        }
    });
});

module.exports = router;