import { model, Schema, Document } from 'mongoose';

import ICreateAnswerDTO from '../../../../DTO/ICreateAnswerDTO';

export interface IMessageDocument extends Document {
  from: string;
  category?: string;
  title: string;
  content: string;
  answers?: ICreateAnswerDTO[];
  read?: boolean;
}

const MessageSchema: Schema = new Schema(
  {
    from: {
      type: String,
      required: true,
    },
    read: {
      type: Boolean,
      default: false,
    },
    category: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    answers: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Answer',
      },
    ],
  },
  {
    timestamps: true,
  },
);

export default model<IMessageDocument>('Message', MessageSchema);
