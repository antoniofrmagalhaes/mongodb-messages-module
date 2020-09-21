import { injectable, inject } from 'tsyringe';

import IMessagesRepository from '../repositories/IMessagesRepository';
import {
  IQuery,
  IResponse,
} from '../infra/mongoose/repositories/MessagesRepository';

@injectable()
class FindAllMessagesService {
  constructor(
    @inject('MessagesRepository')
    private messagesRepository: IMessagesRepository,
  ) {}

  public async execute(query: IQuery): Promise<IResponse> {
    const messages = await this.messagesRepository.find(query);
    return messages;
  }
}

export default FindAllMessagesService;
