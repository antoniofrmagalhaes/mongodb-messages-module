import ICreateAnswerDTO from './ICreateAnswerDTO';

export default interface ICreateMessageDTO {
  from: string;
  type?: string;
  title: string;
  content: string;
  answers?: ICreateAnswerDTO[];
  read?: boolean;
}
