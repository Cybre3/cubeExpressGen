const logout = function (req, res, next) {
    res.clearCookie("token");
    res.clearCookie("username");
    res.clearCookie("connect.sid");

    res.redirect("/");
};

module.exports = {
    logout,
};
