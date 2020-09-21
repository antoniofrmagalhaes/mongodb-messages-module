import MessagesTestRepository from '../__test__/repositories/MessagesTestRepository';
import CreateMessageService from './CreateMessageService';
import ReadMessageService from './ReadMessageService';
import AppError from '../../../errors/AppError';

let messageTestRepository: MessagesTestRepository;
let createMessageService: CreateMessageService;
let readMessageService: ReadMessageService;

describe('Read Message Service Test', () => {
  beforeEach(() => {
    messageTestRepository = new MessagesTestRepository();
    createMessageService = new CreateMessageService(messageTestRepository);
    readMessageService = new ReadMessageService(messageTestRepository);
  });

  it('should mark a message as read', async () => {
    const message = await createMessageService.execute({
      from: 'some-user-id',
      title: 'title',
      content: 'content',
    });

    const readMessage = await readMessageService.execute(message._id);

    expect(readMessage.read).toBe(true);
  });

  it('should not mark a non existing message as read', async () => {
    await expect(
      readMessageService.execute('non-existing-id'),
    ).rejects.toBeInstanceOf(AppError);
  });
});
