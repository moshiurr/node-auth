const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//import auth route
const authRoute = require("./routes/auth");

dotenv.config();

// connect to db
mongoose.connect(
	process.env.DB_CONNECT,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	},
	() => console.log("connected to db!")
);
// const connection = mongoose.connection;

// connection.once("open", function () {
// 	console.log("MongoDB database connection established successfully");
// });
//Middleware
app.use(express.json());

//route middlewares
app.use("/api/user", authRoute);

app.listen(4000, () => console.log("Server is running on port 4000."));
