var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.GetAll = function(callback) {
    connection.query('SELECT * FROM Companies;',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            console.log(result);
            callback(false, result);
        }
    );
}


exports.GetByID = function(ShopperID, callback) {
    console.log(userID);
    var query = 'SELECT * FROM all_posts_by WHERE CompanyID=' + userID;
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}


exports.Insert = function(account_info, callback) {

    console.log(account_info);

    var dynamic_query = 'INSERT INTO Companies (CompanyName, Email, Password) VALUES (' +
        '\'' + account_info.CompanyName + '\', ' +
        '\'' + account_info.Email + '\', ' +
        '\'' + account_info.Password + '\'' +
        ');';

    console.log("test");
    console.log(dynamic_query);

    connection.query(dynamic_query,

        function (err, result) {

            if(err) {

                console.log(err);
                callback(true);
                return;
            }



            callback(false, result);
        }
    );
}

/*
 exports.GetByEmail = function(email, callback) {
 var query = 'CALL Shopper_GetByEmail(?, ?)';
 var query_data = [email, password];

 connection.query(query, query_data, function(err, result) {
 if(err){
 callback(err, null);
 }
 /* NOTE: Stored Procedure results are wrapped in an extra array
 /* and only one user record should be returned,
 // so return only the one result
 else if(result[0].length == 1) {
 callback(err, result[0][0]);
 }
 else {
 callback(err, null);
 }
 });
 }
 */