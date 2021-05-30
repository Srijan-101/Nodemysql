const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./Routes/app.routes');
const cors = require('cors');

const PORT = 8000;
app.use(cors({origin : 'http://localhost:8444'}));


app.use(morgan('dev'));
app.use(bodyParser.json());


app.use('/api',router);
app.listen(PORT,() => {
    console.log(`Server running at ${PORT}`);
})