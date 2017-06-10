var express = require('express');
var router = express.Router();
var multer = require('multer')
var storage = multer.memoryStorage()
var upload = multer({storage: storage})


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'File Metadata'});
});

router.post('/file', upload.single('avatar'), function (req, res, next) {
    res.send({size:req.file.size+" bytes"});
});

module.exports = router;
