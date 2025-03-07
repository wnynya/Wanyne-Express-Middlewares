'use strict';

function parseCookieString(s) {
  const o = {};
  for (const c of s.split(';')) {
    const v = c.split('=');
    o[decodeURIComponent((v[0] ? v[0] : '').trim())] = decodeURIComponent(
      (v[1] ? v[1] : '').trim()
    );
  }
  return o;
}

export default () => {
  return async (req, res, next) => {
    req.cookies = req?.headers?.cookie
      ? parseCookieString(req?.headers?.cookie)
      : {};
    next();
  };
};
