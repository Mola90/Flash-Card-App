import './App.css'
import NavBar from './components/navbar'
import { Outlet } from 'react-router-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
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
