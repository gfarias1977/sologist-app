import React from 'react';
import Routes from './routes';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import configureStore, { history } from 'src/redux/store';
import { Switch } from 'react-router-dom';
import AppContextProvider from 'src/@jumbo/components/contextProvider/AppContextProvider';
import AppWrapper from 'src/@jumbo/components/AppWrapper';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

export const store = configureStore();

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppContextProvider>
        <AppWrapper>
          <Switch>
            <Routes />
          </Switch>
        </AppWrapper>
      </AppContextProvider>
    </ConnectedRouter>
  </Provider>
);

export default App;
