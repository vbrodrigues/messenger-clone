import { Conversation, Message, User } from "@prisma/client";

export type FullMessageType = Message & {
  user: User | null;
  seenByUsers: User[];
};

export type FullConversationType = Conversation & {
  users: User[];
  messages: FullMessageType[];
};
