const express = require('express');
const app = express();
const cors = require("cors");

app.use(express.json());    // let data input read as json file
app.use(cors());            // give permission to frontend to access database

const db = require('./models');

// Routers
const postRouter = require('./routes/Posts');
app.use("/posts", postRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("server running on port 3001");
    });
});

