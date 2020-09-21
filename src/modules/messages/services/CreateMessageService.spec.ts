import MessagesTestRepository from '../__test__/repositories/MessagesTestRepository';
import CreateMessageService from './CreateMessageService';
import AppError from '../../../errors/AppError';

let createMessageService: CreateMessageService;
let messagesTestRepository: MessagesTestRepository;

describe('Create Message Service Test', () => {
  beforeEach(() => {
    messagesTestRepository = new MessagesTestRepository();
    createMessageService = new CreateMessageService(messagesTestRepository);
  });

  it('should create a new message', async () => {
    const message = await createMessageService.execute({
      from: 'some-user-id',
      title: 'title',
      content: 'content',
    });
    expect(message).toHaveProperty('_id');
  });

  it('should not create a new message without content', async () => {
    await expect(
      createMessageService.execute({
        from: 'some-user-id',
        title: 'title',
        content: '      ',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
