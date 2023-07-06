const restrict = (permission) => {
  return (req, res, next) => {
    const userRole = req.body.role;
    if (permission.includes(userRole)) {
      next();
    } else {
      return res.status(400).send("you don have a permission");
    }
  };
};

module.exports = restrict;
