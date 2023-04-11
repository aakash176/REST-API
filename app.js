const express = require('express')
const app = express()
const router = require('./routes/routes')
const bodyParser = require('body-parser')
const port = 5000
app.use(bodyParser.json());

app.use('/api/v1/tasks', router)
app.listen(port, () => {console.log(`app is listening to port ${port}`);})