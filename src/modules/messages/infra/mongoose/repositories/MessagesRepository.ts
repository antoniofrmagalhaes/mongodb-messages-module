import Message, { IMessageDocument } from '../entities/schemas/Message';
import ICreateMessageDTO from '../../../DTO/ICreateMessageDTO';

class MessagesRepository {
  public async create({
    from,
    title,
    content,
  }: ICreateMessageDTO): Promise<IMessageDocument> {
    const message = await Message.create({
      from,
      title,
      content,
    });

    return message;
  }
}

export default MessagesRepository;
