import { atom } from 'recoil';

interface Message {
  id: string;
  text: string;
}

export const messagesAtom = atom<Message[]>({
  key: 'MessagesList',
  default: [],
});
