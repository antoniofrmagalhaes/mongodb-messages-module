import { injectable, inject } from 'tsyringe';

import IMessagesRepository from '../repositories/IMessagesRepository';
import { IMessageDocument } from '../infra/mongoose/entities/schemas/Message';
import AppError from '../../../errors/AppError';

@injectable()
class ShowMessageService {
  constructor(
    @inject('MessagesRepository')
    private messagesRepository: IMessagesRepository,
  ) {}

  public async execute(message_id: string): Promise<IMessageDocument> {
    const message = await this.messagesRepository.findById(message_id);

    if (!message) throw new AppError('message not found');

    return message;
  }
}

export default ShowMessageService;
