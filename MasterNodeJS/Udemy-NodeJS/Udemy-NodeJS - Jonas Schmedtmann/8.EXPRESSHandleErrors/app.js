
const express = require('express');
const morgan = require('morgan');

const AppError = require('./utils/appError');
const globalError = require('./controllers/errorController');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// 1) Middlewares
console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`))

app.use((req, res, next) =>{
    req.requestTime = new Date().toISOString();
    next();
})

// Routes
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

app.all('*',(req, res, next) => {
    next(new Error(`Can't find ${req.originalUrl} `, 404));
});

app.use(globalError);

module.exports = app;