import headers from './headers.mjs';
import cookies from './cookies.mjs';
import client from './client.mjs';
import JSONResponses from './json-responses.mjs';
import check from './check.mjs';
import logger from './logger.mjs';

export default {
  headers: headers,
  cookies: cookies,
  client: client,
  logger: logger,
  JSONResponses: JSONResponses,
  check: check,
};

export { headers, cookies, client, JSONResponses, check, logger };
