const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const cors = require('cors');

const dbUrl = "mongodb+srv://jckhex200:uCI8RVjmzDg3DE0s@cluster0.4m9mfzy.mongodb.net/forcicdnew?retryWrites=true&w=majority";
const connectionParams = {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}

mongoose.connect(dbUrl ,connectionParams);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const app = express();
app.use(cors())
app.use(express.json());
app.use('/api', routes)
app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})