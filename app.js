const express = require('express');
const app = express();
const multer = require('multer');
const UUID = require('uuid');


// multer配置
const storage = multer.diskStorage({
    destination: './public',
    filename: function(req, file, cb) {
        let extName = UUID.v1() + '.' + file.originalname.split('.').reverse()[0];
        cb(null, extName)
    }
});
const upload = multer({
    storage: storage
});

// 静态托管
app.use(express.static('public'));

// 处理upload请求
app.post('/upload', upload.single('file'), function (req, res, next) {
    let file = req.file;
    res.send(file)
});


app.listen(3001,function(){
    console.log("在运行了哦，QwQ！")
});
