import ICreateMessageDTO from '../../../DTO/ICreateMessageDTO';
import Message, { IMessageDocument } from '../entities/schemas/Message';

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
