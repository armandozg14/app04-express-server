import express from 'express';

const app = express();

const port = 5000;

app.use('/', (request, response) =>{
    response.send('<h1>Hello my custom server</h1>');
});

app.listen(port, ()=> console.log(`Server started at: http://localhost:${port}`));