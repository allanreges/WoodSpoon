import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://frontend-challenge.jungsoft.io/graphql',
});

export default client;
