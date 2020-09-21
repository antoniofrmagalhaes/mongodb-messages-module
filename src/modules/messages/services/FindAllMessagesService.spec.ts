import MessagesTestRepository from '../__test__/repositories/MessagesTestRepository';
import CreateMessageService from './CreateMessageService';
import FindAllMessagesService from './FindAllMessagesService';

let messagesTestRepository: MessagesTestRepository;
let createMessageService: CreateMessageService;
let findAllMessagesService: FindAllMessagesService;

describe('Find All Messages Service Test', () => {
  beforeEach(() => {
    messagesTestRepository = new MessagesTestRepository();
    createMessageService = new CreateMessageService(messagesTestRepository);
    findAllMessagesService = new FindAllMessagesService(messagesTestRepository);
  });

  it('should list all messages', async () => {
    const message1 = await createMessageService.execute({
      from: 'some-user-id',
      title: 'title',
      content: 'content',
    });

    const message2 = await createMessageService.execute({
      from: 'some-user-id',
      title: 'title',
      content: 'content',
    });

    const messages = await findAllMessagesService.execute({});
    console.log(messages);
    expect(messages).toStrictEqual({
      total: 2,
      unread: 2,
      result: [message1, message2],
    });
  });
});
