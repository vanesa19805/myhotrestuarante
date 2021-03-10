var path = require('path');

module.exports = function(app){

	app.get('/tables.html', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/tables.html'));
	});


	app.get('/reservation.html', function(req, res){
    res.sendFile(path.join(__dirname + '/../public/reservation.html'));
	});

	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/index.html'));
	});
}
