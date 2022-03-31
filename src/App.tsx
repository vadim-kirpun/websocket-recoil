import { RecoilRoot } from 'recoil';

import useSocket from './hooks/useSocket';
import './App.css';

const App = () => {
  useSocket();

  return (
    <RecoilRoot>
      <div className="App"></div>
    </RecoilRoot>
  );
};

export default App;
