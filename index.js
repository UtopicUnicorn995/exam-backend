const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3005;

mongoose.connect('mongodb+srv://admin:admin123@cluster0.brekg.mongodb.net/PartyDB?retryWrites=true&w=majority',
{
	useNewUrlParser: true,
	useUnifiedTopology: true
});

let db = mongoose.connection;

db.on('error', console.error.bind(console, "MongoDB connection error"));
db.once('open', () => console.log("Connected to MongoDB"))

app.use(express.json());
app.use(cors());

const userRoutes = require('./routes/userRoute.js')
const eventRoutes = require('./routes/eventRoute.js')
const bookingRoutes = require('./routes/bookingRoute.js')

app.use('/user', userRoutes)
app.use('/event', eventRoutes)
app.use('/book', bookingRoutes)

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`))