const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://gabriel:gabriel123@ds141043.mlab.com:41043/omni-stack', 
    {
        useNewUrlParser: true
    }
);

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use((req, res, next)=>{
    req.io = io;

    return next();
});

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

server.listen(3000, ()=>{
    console.log("Servidor está vivo");
});