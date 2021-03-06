const express = require('express');

const app = express();

app.use(logMW);

app.get('/', (req, res) => {
    res.send(`Index`);
});

app.get('/users', (req, res) => {
    res.send('Users Page');
});

app.get('/test', (req, res) => {
    res.send('the test page');
});

function logMW(req, res, next) {
    // console.log('MW...');
    // res.send(`${new Date().toISOString()}: ${req.originalUrl}`);
    console.log(`${new Date().toISOString()}: ${req.originalUrl}`);
    next();
}

app.listen(3000, () => console.log('server started'));
