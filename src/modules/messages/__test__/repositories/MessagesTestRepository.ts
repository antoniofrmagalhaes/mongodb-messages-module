import { v4 as uuid } from 'uuid';
import ICreateMessageDTO from '../../DTO/ICreateMessageDTO';
import Message, {
  IMessageDocument,
} from '../../infra/mongoose/entities/schemas/Message';

class MessagessTestRepository {
  private messagesRepository: IMessageDocument[] = [];

  public async create({
    from,
    title,
    content,
  }: ICreateMessageDTO): Promise<IMessageDocument> {
    const message = new Message();

    this.messagesRepository.push(
      Object.assign(
        message,
        { _id: uuid() },
        {
          from,
          title,
          content,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ),
    );

    return message;
  }
}

export default MessagessTestRepository;
