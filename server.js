var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var UserInfo = require('./mongoConfig')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post('/details', function(req, res){
	var newData = new UserInfo({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    userId: req.body.userId
  });
  newData.save(function(err, result){
  	console.log(result);
  	res.send({"status":200});
  })
});

app.get('/getList', function(req, res){
	UserInfo.find({}).select({"name":1, "_id":0, "userId":1}).exec(function(err, data){
		res.send(data);
	})
})

app.listen(3000, function(){
	console.log('Now use the postman to play with my app');
});