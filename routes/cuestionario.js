var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

/* GET Cuestionario Ceneval. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
    try{
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("saice");
            dbo.collection("cuestionarios_ceneval").findOne({activo:true}, function(err, result) {
            if (err) throw err;
               res.send(result);
              db.close();
            });
          });
    } catch (error) {
        res.status(500).send(`Error al obtener los datos: ${error}`)
    }


});

module.exports = router;