import MessagesTestRepository from '../__test__/repositories/MessagesTestRepository';
import CreateMessageService from './CreateMessageService';
import ShowMessageService from './ShowMessageService';
import AppError from '../../../errors/AppError';

let messageTestRepository: MessagesTestRepository;
let createMessageService: CreateMessageService;
let showMessageService: ShowMessageService;

describe('Show Message Service Test', () => {
  beforeEach(() => {
    messageTestRepository = new MessagesTestRepository();
    createMessageService = new CreateMessageService(messageTestRepository);
    showMessageService = new ShowMessageService(messageTestRepository);
  });

  it('should show a single message', async () => {
    const message = await createMessageService.execute({
      from: 'some-user-id',
      title: 'title',
      content: 'content',
    });
    const messageFound = await showMessageService.execute(message._id);
    expect(messageFound).toStrictEqual(message);
  });

  it('should not show a non existing message', async () => {
    await expect(
      showMessageService.execute('non-existing-id'),
    ).rejects.toBeInstanceOf(AppError);
  });
});
