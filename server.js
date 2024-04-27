const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const cors = require('cors');
const connectToDb = require('./config/connectToDb');

const customersRouter = require('./routes/customersRouter');
const inventoryRouter = require('./routes/inventoryRouter');
const ordersRouter = require('./routes/ordersRouter');

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//connect to database
connectToDb();

//routing
app.use('/customers', customersRouter);
app.use('/inventory', inventoryRouter);
app.use('/orders', ordersRouter);

//listen
app.listen(PORT, (req, res) => {
    console.log(`Listening on port ${PORT}`);
})