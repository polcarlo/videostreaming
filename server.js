let express = require('express')
let socket = require('socket.io')
let app = express()
app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', function(req, res){
	res.render('home')
})





const runServer = app.listen(8888, ()=>console.log('server is running at 127.0.0.1:8888'))

var io = socket(runServer)

io.on('connection', function(socket){
	socket.on('videos', function(img){
		socket.broadcast.emit('videos',img)
	})
})


