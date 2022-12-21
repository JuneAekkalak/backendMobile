const express  = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const usersRoutes = require('./routes/users');
const bodyTypeRoutes = require('./routes/bodytype');

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use("/api/auth",usersRoutes);
app.use("/api/body",bodyTypeRoutes);

app.listen(8081);