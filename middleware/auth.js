const handleAuth = function(req, res, next) {
  const hasToken = !!req.session.token;

  if (hasToken) {
    next();
  } else {
    res.json({ hasToken });
  }
};

module.exports = {
  handleAuth
}
