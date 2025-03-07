'use strict';

const HTTPResponses = {
  default200: 'OK',
  pong200: 'pong!',
  default201: 'Created',
  default202: 'Accepted',
  default203: 'Non-Authoritative Information',
  default204: 'No Content',
  default205: 'Reset Content',
  default206: 'Partial Content',

  default400: 'Bad Request',
  body400: 'Lack Request Body',
  filemime400: 'Unsupported File Type',

  default401: 'Unauthorized',
  auth401: 'Failed To Authenticate With Server',
  login401: 'Login Failed',

  default403: 'Forbidden',
  auth403: 'Failed To Authenticate With Server',
  permission403: 'You Do Not Have Permission To Access',

  default404: 'Not Found',
  data404: 'No Data',
  element404: 'Element Not Found',
  file404: 'File Not Found',
  image404: 'Image Not Found',
  audio404: 'Audio Not Found',
  video404: 'Video Not Found',
  account404: 'Account Not Found',
  session404: 'Session Not Found',
  key404: 'Key Not Found',
  article404: 'Article Not Found',
  comment404: 'Comment Not Found',
  build404: 'Build Not Found',
  server404: 'Server Not Found',
  email404: 'Email Address Not Found',
  entity404: 'No Entities',

  default405: 'Method Not Allowed',
  default406: 'Not Acceptable',
  default407: 'Proxy Authentication modulesd',
  default408: 'Request Timeout',

  default409: 'Conflict',

  default410: 'Gone',
  default411: 'Length modulesd',
  default412: 'Precondition Failed',
  default413: 'Payload Too Large',
  default414: 'URI Too Long',
  default415: 'Unsupported Media Type',
  default416: 'Range Not Satisfiable',
  default417: 'Expectation Failed',
  default418: "I'm a teapot",
  default422: 'Unprocessable Entity',
  default426: 'Upgrade modulesd',
  default429: 'Too Many Requests',
  default431: 'Request Header Fields Too Large',
  default451: 'Unavailable For Legal Reasons',

  default500: 'Internal Server Error',
  default501: 'Not Implemented',
  default502: 'Bad Gateway',
  default503: 'Service Unavailable',
  default504: 'Gateway Timeout',
  default505: 'HTTP Version Not Supported',
  default506: 'Variant Also Negotiates',
  default510: 'Not Extended',
  default511: 'Network Authentication Required',
};

export default () => {
  return (req, res, next) => {
    res.data = (data = null, status = 200, message = `default${status}`) => {
      if (HTTPResponses[message]) {
        status = Number(message.substring(message.length - 3));
      }
      const body = {
        message: HTTPResponses[message] || message,
        data: data,
      };
      if (data === null) {
        delete body.data;
      }
      res.status(status).json(body);
      return status;
    };

    res.error = (error, status) => {
      return res.data(null, status, error);
    };

    res.ok = (message) => {
      return res.data(null, 200, message);
    };
    next();
  };
};
