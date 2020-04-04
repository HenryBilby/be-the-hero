const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors)
app.use(express.json());//Adicionada para entender requisições que enviam json no body
app.use(routes)


app.listen(3333);