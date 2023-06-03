
// @definition: apply a student
// @path: http://localhost:5000/api/users/register
// @method: POST
// @privacy: public
const applyStudent = async (req, res) => {
    const {title, firstName, lastName, email, phone, programType} = req.body;
    return res.status(200).json({message: "Student application successful",
    data: req.body,
    });
};

// @definition: login a student
// @path: http://localhost:5000/api/users/login
// @method: POST
// @privacy: public
const loginStudent = async (req, res) => {
    const { email, password } = req.body;
    return res.status(200).json({ message: "Student succesfully logged in!",
    data: req.body,
    });
};

module.exports = { applyStudent, loginStudent };