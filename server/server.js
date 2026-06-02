const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();



// MIDDLEWARE

app.use(cors());
app.use(express.json());



// ROUTES

app.use("/api/products", productRoutes);
app.use("/api/auth", userRoutes);



// MONGODB CONNECTION

mongoose.connect(process.env.MONGO_URI)

.then(() => {

  console.log("MongoDB Connected");

})

.catch((err) => {

  console.log(err);

});




// TEST ROUTE

app.get("/", (req, res) => {

  res.send("API Running");

});




// SERVER

const PORT = 5000;

app.listen(PORT, () => {

  console.log(`Server running on ${PORT}`);

});
