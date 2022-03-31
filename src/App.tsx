import { RecoilRoot } from 'recoil';

import Messages from './components/Messages';
import WithSocket from './components/WithSocket';

import './App.css';

const App = () => (
  <RecoilRoot>
    <WithSocket>
      <Messages />
    </WithSocket>
  </RecoilRoot>
);

export default App;
