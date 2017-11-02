const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/DMS')
const app = express();


//routes
const users = require('./routes/users');
const documents = require('./routes/documents');
const roles = require('./routes/roles');

// middleware
app.use(logger('dev'));
app.use(bodyparser.json());

//routes
app.use('/users', users);
app.use('/documents', documents);
app.use('/roles', roles);
// catch 404 errors and forward them to error handler
app.use((req, res, next)=>{
     const err = new Error('Not found');
     err.status = 404;
     next(err); 

});
// error handler function
app.use((err, req, res, next)=>{
    const error = app.get('env') === 'development '? err:{}; 
    const status = err.status||500;
    //respond to client
    res.status(status).json({
        error: {
            message: err.message
        }
    }); 
    //respond to ourselves
    console.error(err);
})

// start the server
const port = app.get('port')||3000;
app.listen(port, ()=> console.log(`server is listening to port ${port}`));