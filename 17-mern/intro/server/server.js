import express from 'express';

const app = express();

app.listen(4000, () => {
    console.log('server started');
    console.log('running on the port 4000');
})