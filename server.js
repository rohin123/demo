var express =  require('express')
var path = require('path')

const app = express();
var port = 3333;
var env = process.env.NODE_ENV;

app.set('view engine', 'html');
app.use(express.static(path.resolve(__dirname, './dist')));

// app.get('/*',function(req,res,next){
// 	res.sendFile('./dist/index.html')
// 	res.end(200)
// })

var server = app.listen(port, ()=>{
	var host = server.address().address;
	var port = server.address().port;
	//socket.init();
	console.log('App listening at http://%s:%s', host,port);
});

