/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import AppError from './AppError';

export default function (
  e: Error,
  request: Request,
  response: Response,
  _: NextFunction,
): Response {
  if (e instanceof AppError) {
    return response.status(e.statusCode).json({
      status: 'error',
      message: e.message,
    });
  }
  return response.status(500).json({
    status: 'error',
    message: e.message,
  });
}
