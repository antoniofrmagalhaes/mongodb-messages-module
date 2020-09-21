import ICreateMessageDTO from '../DTO/ICreateMessageDTO';
import { IMessageDocument } from '../infra/mongoose/entities/schemas/Message';
import {
  IQuery,
  IResponse,
} from '../infra/mongoose/repositories/MessagesRepository';

export default interface IMessagesRepository {
  find(query: IQuery): Promise<IResponse>;
  create(notificationData: ICreateMessageDTO): Promise<IMessageDocument>;
}
