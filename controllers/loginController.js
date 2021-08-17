const getLoginForm = function (req, res, next) {
  res.render("loginPage");
};

module.exports = {
  getLoginForm,
};
