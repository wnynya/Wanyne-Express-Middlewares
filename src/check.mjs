function internal(perm) {
  return (req, res, next) => {
    if (!req.client.internalCORS) {
      if (perm) {
        if (!req.hasPermission(perm)) {
          res.error('permission403');
          return;
        }
      } else {
        res.error('default401');
        return;
      }
    }
    next();
  };
}

function login(bool = true) {
  return (req, res, next) => {
    if (bool) {
      if (!req.login) {
        res.error('default401');
        return;
      }
    } else {
      if (req.login) {
        res.error('default409');
        return;
      }
    }
    next();
  };
}

function body() {
  return (req, res, next) => {
    if (!req.body) {
      res.error('body400');
      return;
    }
    next();
  };
}

function perm(perm) {
  return (req, res, next) => {
    if (!req.hasPermission(perm)) {
      res.error('permission403');
      return;
    }
    next();
  };
}

export default {
  internal: internal,
  login: login,
  body: body,
  perm: perm,
};
