var express =  require('express')
var path = require('path')

const app = express();
var port = 3333;
var env = process.env.NODE_ENV;

switch(env){
	case "production":
		port = 80;
		break;

	case "development":
		port= 8080;
		break;

	default:
		port = 3333;
		break;
}
app.set('view engine', 'html');
app.use(express.static(path.resolve(__dirname, './dist')));

var server = app.listen(port, ()=>{
	var host = server.address().address;
	var port = server.address().port;
	//socket.init();
	console.log('App listening at http://%s:%s', host,port);
});

