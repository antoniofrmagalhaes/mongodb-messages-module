import MessagesTestRepository from '../__test__/repositories/MessagesTestRepository';
import CreateMessageService from './CreateMessageService';
import DeleteMessageService from './DeleteMessageService';
import AppError from '../../../errors/AppError';

let messageTestRepository: MessagesTestRepository;
let createMessageService: CreateMessageService;
let deleteMessageService: DeleteMessageService;

describe('Delete Message Service Test', () => {
  beforeEach(() => {
    messageTestRepository = new MessagesTestRepository();
    createMessageService = new CreateMessageService(messageTestRepository);
    deleteMessageService = new DeleteMessageService(messageTestRepository);
  });

  it('should delete an specific message', async () => {
    const message = await createMessageService.execute({
      from: 'some-user-id',
      title: 'title',
      content: 'content',
    });
    expect(deleteMessageService.execute(message._id));
  });

  it('should not delete a non existing message', async () => {
    await expect(
      deleteMessageService.execute('non-existing-id'),
    ).rejects.toBeInstanceOf(AppError);
  });
});
