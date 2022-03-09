//to protect pages from being access only when checked in - import this util and insert into the router parameters

const withAuth = (req, res, next) => {
    if (!req.session.email) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;