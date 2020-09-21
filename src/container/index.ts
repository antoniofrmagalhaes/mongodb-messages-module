import { container } from 'tsyringe';

import MessagesRepository from '../modules/messages/infra/mongoose/repositories/MessagesRepository';
import IMessagesRepository from '../modules/messages/repositories/IMessagesRepository';

container.registerSingleton<IMessagesRepository>(
  'MessagesRepository',
  MessagesRepository,
);
