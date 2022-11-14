import express from 'express';
import { convertCLTToPJ } from './controllers/calculator-controller';
import { listAllJobs } from './controllers/jobs-controller';

const app = express();
app.use(express.json());

app.get ('/', (req, res) => {
    res.send('Hello World');
    });
app.get ('/jobs', listAllJobs);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
    }
);

