import 'reflect-metadata';
import { container } from 'tsyringe';
import { Request, Response } from 'express';

import CreateMessageService from '../../../services/CreateMessageService';

class MessagesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const createMessage = container.resolve(CreateMessageService);

    const message = await createMessage.execute(request.body);

    return response.json(message);
  }
}

export default new MessagesController();
