import ICreateMessageDTO from '../DTO/ICreateMessageDTO';
import { IMessageDocument } from '../infra/mongoose/entities/schemas/Message';

export default interface IMessagesRepository {
  create(notificationData: ICreateMessageDTO): Promise<IMessageDocument>;
}
