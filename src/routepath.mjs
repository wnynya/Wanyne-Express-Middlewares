'use strict';

export default () => {
  return (req, res, next) => {
    Object.defineProperty(req, 'params', {
      get() {
        return this.__params;
      },
      set(params) {
        if (!this.routepath) {
          this.routepath = this.baseUrl + this.path;
        }
        for (const key in params) {
          if (Object.hasOwnProperty.call(params, key)) {
            const val = params[key];
            this.routepath = this.routepath.replace(`/${val}`, `/:${key}`);
          }
        }
        this.__params = params;
      },
    });

    next();
  };
};
