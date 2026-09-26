import router from './src/router/marca.js';
import express from 'express';

const app = express();

app.use(express.json());
app.use('/api', router);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});