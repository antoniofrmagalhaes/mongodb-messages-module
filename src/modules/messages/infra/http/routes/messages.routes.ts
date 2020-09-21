import { Router } from 'express';

import MessagesController from '../controllers/MessagesController';

const messagesRouter = Router();

messagesRouter.post('/', MessagesController.create);

export default messagesRouter;
