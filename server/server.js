//initialize our env files
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const usersRouter = require("./routes/usersRoutes");

// initialize the express application
const app = express();

const PORT = process.env.PORT || 5000;

// middleswares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// define routes
app.use("/api/users", usersRouter );

// home route
app.get('/', (req, res) => {
    return res.status(200).json({ message: "welcome to home page"});
});


// start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});