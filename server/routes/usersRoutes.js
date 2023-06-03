const express = require("express");
const usersRouter = express.Router();

const { applyStudent, loginStudent } = require("../controllers/usersControllers");



// @definition: a student application
// @path: http://localhost:5000/api/users/apply
// @method: POST
// @privacy: public
usersRouter.post("/apply", applyStudent);


// @definition: login a student
// @path: http://localhost:5000/api/users/login
// @method: POST
// @privacy: public
usersRouter.post("/login", loginStudent);


module.exports = usersRouter;