import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './services'
import GlobalStyle from './styles/global';

import Home from './pages/Home'

const App = () => (
  <ApolloProvider client={client}>
    <GlobalStyle />
    <Home />
  </ApolloProvider>
);

export default App;
