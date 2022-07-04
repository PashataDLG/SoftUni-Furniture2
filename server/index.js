const mongoose = require('mongoose');
const express = require('express');

const cors = require('./src/middleware/cors');
const auth = require('./src/middleware/auth');
const { COLLECTION_NAME } = require('./src/config/constants');
const router = require('./src/router');


async function start() {
    try {
        await mongoose.connect(`mongodb://localhost:27017/${COLLECTION_NAME}`);

        console.log('DB Ready');
    } catch (err) {
        console.log('Error connecting to database');
        return process.exit(1);
    }

    const app = express();

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(cors());
    app.use(auth());

    app.use(router);

    app.listen(3030, () => console.log('REST Service started on port 3030'));
}


start();