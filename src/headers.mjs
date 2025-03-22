'use strict';

export default (headers) => {
  return (req, res, next) => {
    for (const key in headers) {
      const value = headers[key];
      let origin = req.headers.origin;

      if (key == 'Access-Control-Allow-Origin' && value instanceof Array) {
        if (value.includes(origin)) {
          res.header('Access-Control-Allow-Origin', origin);
        }
      } else if (key == 'Access-Control-Allow-Origin' && value === '*') {
        res.header('Access-Control-Allow-Origin', origin || '*');
      } else {
        res.header(key, value);
      }
    }
    next();
  };
};
