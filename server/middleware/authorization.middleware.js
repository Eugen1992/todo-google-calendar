module.exports = function (req, res, next) {
  if (req.headers['authorization']) {
    req.accessToken = req.headers['authorization'];
    next();
  } else {
    res.sendStatus(401);
  }
};