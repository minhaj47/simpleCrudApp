const express = require('express');

const app = express();
const mongoose = require('mongoose');
const productRoute = require('./routes/product.routes');
const Product = require('./models/product.model');

// // middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// // route
app.use('/api/products', productRoute);

// home
app.get('/', (req, res) => {
    res.send('hello from updated node api server.');
});

mongoose
    .connect(
        'mongodb+srv://minhajul331047:cOKvfLsyQ0YYuGhy@firstcluster.jplfzpk.mongodb.net/Node-API?retryWrites=true&w=majority&appName=FirstCluster'
    )
    .then(() => {
        console.log('Connected to database!');
        app.listen(3000, () => {
            console.log('Server is running on port 3000.');
        });
    })
    .catch((error) => {
        console.log(`Db not connected.${error}`);
    });
