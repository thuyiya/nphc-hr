

import type { Router, Request, Response, ErrorRequestHandler, NextFunction } from 'express';
import EmployeeRouter from './employee';
import Config from '../config'
import { STRINGS } from '../constants';
import { ERROR_RESPONSE, SUCCESS_RESPONSE } from '../common/messages';

const appRouter = (router: Router) => {
  router.route("/").get(function (req, res) {
    res.status(200).json(
      SUCCESS_RESPONSE.success({
        message: `${Config.API.name} ${STRINGS.MESSAGES.API_VERSION} ${Config.API.version}`,
      })
    );
  });

  // define routes
  EmployeeRouter(router);

  router.use(function (req, res, next) {
    next(ERROR_RESPONSE.notFound({ messgae: STRINGS.MESSAGES.ENDPOINT_NOT_FOUND }));
  }); // catch 404 and forward to error handler

  router.use(function (err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) {
    res.status(500).json(
      ERROR_RESPONSE.errorMessage({
          message: STRINGS.MESSAGES.SOMETHING_WENT_WRONG,
          code: 500,
          details: err
        })
      );
  }); // If our applicatione encounters an error, we'll display the error and stacktrace accordingly

  return router;
};

export default appRouter;