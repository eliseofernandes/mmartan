import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import Routes from './routes';
import theme from './theme';
import store from './store/storeConfig';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Routes />
        </Router>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
