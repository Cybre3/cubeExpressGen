

const logout = function (req, res, next) {
    
    res.clearCookie("token");
    res.clearCookie("username");
    res.redirect("/");
};

module.exports = {
    logout,
};
