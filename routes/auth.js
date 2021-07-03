const router = require("express").Router();
const User = require("../model/User");
const { registerValidation, loginValidaiton } = require("../validation");

router.post("/register", async (req, res) => {
	//let's validate
	const { error } = registerValidation(req.body);

	if (error) return res.status(400).send(error.details[0].message);

	//checking user already exist
	const emailExist = await User.findOne({ email: req.body.email });
	if (emailExist) return res.status(400).send("User already exist!");

	//No error , So creating a new user using the User Schema
	const user = new User({
		_id: "13rfasdfgag",
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
	});
	try {
		const savedUser = await user.save();
		res.send(savedUser);
	} catch (err) {
		res.status(400).send(err);
	}
});

module.exports = router;
