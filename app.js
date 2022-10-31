require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.use(cors());
app.use('/api', require('./routes'));

app.listen(port, () =>{
    console.log(`Server is running on port: ${port}`);
});
