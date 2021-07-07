const app = require('express')() //SERVIDOR EXPRESS
const http = require('http').createServer(app) 
const io = require('socket.io')(http) //CRIAÇÃO DE INSTÂNCIA DO SOCKET.IO E HTTP NO CONSULTOR (MIDDLEWARE)
 
app.get('/', (req, res) => { //ARQUIVO HTML PARA O NAVEGADOR
  res.sendFile(__dirname+ '/index.html')
})


io.on('connection', (socket) => { //PARA SABER SE UM CLIENTE SE CONECTOU
  console.log('New connection', socket.id)
  socket.on('msg', (msg)=>{
    console.log(msg);
    socket.broadcast.emit('msg', socket.id + 'connectedd');
  })
})

http.listen(3000, function () { //OUVIR NA PORTA 3000 A FIM DE TESTES
  console.log('listening on port 3000')
})