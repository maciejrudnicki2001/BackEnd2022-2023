const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/add/:a/:b', (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.send(`${a} + ${b} = ${a + b}`);
});

app.get('/mul/:a/:b', (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.send(`${a} * ${b} = ${a * b}`);
});

app.get('/div/:a/:b', (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    if (b === 0) {
        res.send('Cannot divide by zero');
    } else {
        res.send(`${a} / ${b} = ${a / b}`);
    }
});

