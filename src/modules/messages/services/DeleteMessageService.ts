import { injectable, inject } from 'tsyringe';

import IMessagesRepository from '../repositories/IMessagesRepository';
import AppError from '../../../errors/AppError';

@injectable()
class DeleteMessageSerivce {
  constructor(
    @inject('MessagesRepository')
    private messagesRepository: IMessagesRepository,
  ) {}

  public async execute(message_id: string): Promise<void> {
    const message = await this.messagesRepository.findById(message_id);

    if (!message) throw new AppError('message not found');

    await this.messagesRepository.delete(message_id);
  }
}

export default DeleteMessageSerivce;
