import { Request, Response } from 'express';
import AppError from './AppError';

export default function (
  e: Error,
  request: Request,
  response: Response,
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
