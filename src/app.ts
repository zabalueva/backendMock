import express from 'express';
import cors from 'cors';
import categoriesRouter from "./router/categoriesRouter";

const app = express();

app.use('/categories', categoriesRouter);
app.use(cors());
app.get('/', (req, res) => res.send('Server works'));

app.listen(3000, () => console.log('Server start'));
