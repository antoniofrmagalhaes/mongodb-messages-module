import mongoose from 'mongoose';
import express from 'express';
import 'express-async-errors';
import cors from 'cors';

import routes from './routes';
import GlobalErrorHandler from '../errors/GlobalErrorHandler';

class App {
  public server: express.Application;

  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.globalErrorHandler();
    this.mongoDB();
  }

  private middlewares(): void {
    this.server.use(cors());
    this.server.use(express.json());
  }

  private routes(): void {
    this.server.use(routes);
  }

  private globalErrorHandler(): void {
    this.server.use(GlobalErrorHandler);
  }

  private mongoDB(): void {
    mongoose.connect(`mongodb://localhost:27017/messages`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  }
}

export default new App().server;
