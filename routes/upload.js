const multer = require('multer');
var express = require('express');
var UUID = require('uuid');
var router = express.Router();


var storage = multer.diskStorage({
  destination: './public/uploads',
  filename: function(req, file, cb) {
    let extName = UUID.v1() + '.' + file.originalname.split('.').reverse()[0];
    cb(null, extName)
  }
});

var upload = multer({
  storage: storage
});

router.post('/', upload.single('file'), function (req, res, next) {
  let file = req.file;
  res.json(file);
});

module.exports = router;
