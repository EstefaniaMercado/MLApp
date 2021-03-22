const express = require('express');
require('dotenv').config();

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Access-Control-Allow-Headers, Content-Type, Authorization, Origin, Accept')
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    next()
})

app.use('/api/items', require('./router/searchRouter'));
app.use('/api/items', require('./router/itemRouter'));

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});