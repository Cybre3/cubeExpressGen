var express = require("express");
var router = express.Router();
const loginController = require('../controllers/loginController').getLoginForm;
const loginUser = require('../controllers/loginController').loginUser;
const auth = require('../middleware/loginMiddleware').auth;

router.get('/', loginController);
router.post('/', auth, loginUser);
// router.post('/login', loginValidator(), authCtrl.login);
// router.get("/logout", function (req, res, next) {
// 	res.clearCookie("token");
// 	res.clearCookie("loggedIn");
// 	res.redirect("/");
// });

module.exports = router;