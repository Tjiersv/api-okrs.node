import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('OKR API in construction!');
});

const port = 3000;

app.listen(port, () => console.log(`Server running in port: ${port}`));