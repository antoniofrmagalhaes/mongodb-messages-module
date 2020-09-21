import ICreateMessageDTO from '../DTO/ICreateMessageDTO';
import { IMessageDocument } from '../infra/mongoose/entities/schemas/Message';
import {
  IQuery,
  IResponse,
} from '../infra/mongoose/repositories/MessagesRepository';

export default interface IMessagesRepository {
  find(query: IQuery): Promise<IResponse>;
  findById(message_id: string): Promise<IMessageDocument>;
  create(data: ICreateMessageDTO): Promise<IMessageDocument>;
  delete(message_id: string): Promise<void>;
}
