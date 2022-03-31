import { memo, type PropsWithChildren } from 'react';
import useWebSocket from 'react-use-websocket';
import { useSetRecoilState } from 'recoil';
import { nanoid } from 'nanoid';

import { messagesAtom } from '../store/atoms';

const socketUrl = 'wss://socketsbay.com/wss/v2/2/demo/';

const WithSocket = ({ children }: PropsWithChildren<{}>) => {
  const setMessages = useSetRecoilState(messagesAtom);

  useWebSocket(socketUrl, {
    onMessage(event) {
      setMessages((oldMessages) => [
        ...oldMessages,
        { id: nanoid(), text: event.data },
      ]);
    },
  });

  return <div>{children}</div>;
};

export default memo(WithSocket);
