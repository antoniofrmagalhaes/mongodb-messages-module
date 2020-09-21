import Message, { IMessageDocument } from '../entities/schemas/Message';
import ICreateMessageDTO from '../../../DTO/ICreateMessageDTO';

export interface IQuery {
  page?: string;
  unread?: string;
}

export interface IResponse {
  total: number;
  unread: number;
  result: IMessageDocument[];
}

class MessagesRepository {
  public async find(query: IQuery): Promise<IResponse> {
    const { page, unread } = query;

    const totalRecords = await Message.estimatedDocumentCount();
    const totalUnread = await Message.countDocuments({ read: false });

    if (unread) {
      const unreadOnly = await Message.find()
        .where('read')
        .equals(false)
        .limit(10)
        .skip((Number(page) - 1) * 10)
        .sort('-createdAt');
      return {
        total: totalRecords,
        unread: totalUnread,
        result: unreadOnly,
      };
    }

    const messages = await Message.find()
      .limit(10)
      .skip((Number(page) - 1) * 10)
      .sort('-createdAt');
    return {
      total: totalRecords,
      unread: totalUnread,
      result: messages,
    };
  }

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
