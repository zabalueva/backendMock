import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import categoriesRouter from "./router/categoriesRouter";
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

const app = express();
const staticFilesPath = path.resolve(__dirname, '../assets');

/* app.use('/', express.static(staticFilesPath)); */
app.use('/categories', categoriesRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use(bodyParser.json());
app.use(cors());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
app.get('/', (req, res) => res.send('Server works'));

app.listen(process.env.PORT || 3000, () => console.log('Server start'));
