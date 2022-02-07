const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MedocController = require('./controllers/MedocController');
const PharmacieController = require('./controllers/PharmacieController');
const morgan = require('morgan');
require('./db/config');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use('/api/medocs', MedocController);
app.use('/api/pharmacies', PharmacieController);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));