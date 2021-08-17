const getRegisterForm = function (req, res, next) {
  res.render("registerPage");
};

module.exports = {
  getRegisterForm,
};
