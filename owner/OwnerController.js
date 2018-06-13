// OwnerController.js

var apiUrl = 'http://10.0.2.52:9966';

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var axios = require('axios');

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/*/lastname/:lastname', function(req, res) {
	var dataToSend;
	var lastname = req.params.lastname;
	console.log(lastname);
	
	axios
		.get(apiUrl + '/petclinic/api/owners/*/lastname/' + lastname)
		.then(response => {
			dataToSend = response.data;
			res.status(200).send(dataToSend);
		})
		.catch(error => {
			console.log(error);
		});
});

module.exports = router;
