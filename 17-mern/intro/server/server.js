import express from 'express';
import dotenv from 'dotenv';
import pratimaiRoutes from './routes/pratimaiRoutes.js';
import mongoose from 'mongoose';

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/pratimai', pratimaiRoutes);

app.use((req, res, next) => {
    console.log(req.path, req.method);

    next();
})

mongoose.connect(process.env.dbURL)
    .then(() => {        
        app.listen(process.env.PORT, () => {
            console.log('server started');
            console.log('running on the port: ' + process.env.PORT);
        });
    })
    .catch((error) => console.log(error))