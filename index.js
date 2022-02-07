const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MedocController = require('./controllers/MedocController');
const PharmacieController = require('./controllers/PharmacieController');
require('./db/config');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', MedocController);
app.use('/api', PharmacieController);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));