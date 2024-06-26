import './App.css'
import NavBar from './components/navbar'
import { Outlet } from 'react-router-dom'
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';




const httpLink = createHttpLink({
  uri: 'https://finalprojectflashcard-41e0f26c11e4.herokuapp.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {


  return (
    <>
      <ApolloProvider client={client}>
      <NavBar />
      <Outlet />
      </ApolloProvider>
      </>  
    
  )
}

export default App
