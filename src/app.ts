import express from 'express';

const app = express();

/* app.use(()) */
app.get('/', (req, res) => {
	res.send('Server')
});
app.listen(3000, () => console.log('Server start'));
