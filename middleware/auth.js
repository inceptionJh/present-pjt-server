const handleAuth = function(req, res, next) {
  const { hasToken = undefined } = req.session.user;

  if (hasToken) {
    next();
  } else {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ isAuth: false }));
  }
};

module.exports = {
  handleAuth
}
