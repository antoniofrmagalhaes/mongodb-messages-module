import 'reflect-metadata';
import { injectable, inject } from 'tsyringe';

import IMessagesRepository from '../repositories/IMessagesRepository';
import { IMessageDocument } from '../infra/mongoose/entities/schemas/Message';
import AppError from '../../../errors/AppError';

interface IRequest {
  from: string;
  title: string;
  content: string;
}

@injectable()
class CreateNotificationService {
  constructor(
    @inject('MessagesRepository')
    private messagesRepository: IMessagesRepository,
  ) {}

  public async execute({
    from,
    title,
    content,
  }: IRequest): Promise<IMessageDocument> {
    if (!content.trim()) throw new AppError('content must be provided');

    const message = await this.messagesRepository.create({
      from,
      title,
      content,
    });

    return message;
  }
}

export default CreateNotificationService;
