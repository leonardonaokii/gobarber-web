import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/globals';

import Routes from './routes';

import AppProvider from './hooks/AppProvider';

const App: React.FC = () => (
  <Router>
    <AppProvider>
      <Routes />
    </AppProvider>

    <GlobalStyle />
  </Router>
);

export default App;
