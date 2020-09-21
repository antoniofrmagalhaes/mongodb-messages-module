import { Router } from 'express';

import messagesRouter from '../../modules/messages/infra/http/routes/messages.routes';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ status: 'ok' });
});

routes.use('/messages', messagesRouter);

export default routes;
