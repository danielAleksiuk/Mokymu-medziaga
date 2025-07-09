import express from 'express';
import dotenv from 'dotenv';
import pratimaiRoutes from './routes/pratimaiRoutes.js';
import usersRoutes from './routes/usersRoutes.js';
import mongoose from 'mongoose';
import cors from 'cors';

dotenv.config();
const app = express();


// visiems leistina naudotis musu API
app.use(cors());

// leidziam nauodotis tik specifiniam url
// app.use(cors({
//     origin: 'http://localhost:5173'
// }));

app.use(express.json());
app.use('/api/pratimai', pratimaiRoutes);
app.use('/api/user', usersRoutes);

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

    // Created Title Reps Level 