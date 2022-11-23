require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('./src/router');

const app = express();
const port = process.env.NODE_PORT || 3000;

app.use(cors({
  origin: [process.env.FRONT_URL],
}));

app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
