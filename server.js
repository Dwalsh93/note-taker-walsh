const express = require('express');

const apiRoutes = require('./routes/apiroutes');
const htmlRoutes = require('./routes/htmlroutes');

const PORT = process.env.PORT || 3001;
const app = express();

//uses express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});