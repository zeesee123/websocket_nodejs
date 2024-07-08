// console.log('this is the start of my app');

const express=require('express');

const http=require('http');



const socketIo=require('socket.io');





const app=express();

app.set('view engine','ejs');

const server=http.createServer(app);

const io=socketIo(server);

// console.log();

app.get('/',(req,res)=>{

    console.log('this is the homepage');

    res.render('index');


});


io.on('connection',(socket)=>{

    console.log('a user has connected');


    socket.on('disconnect',()=>{

        console.log('user disconnected');
    });


    socket.on('chat message',(msg)=>{

        // console.log('you just sent a message');
        io.emit('chat message',msg);

    })
});


server.listen(3000,()=>{

    console.log('this the server running');
})