import React from 'react';
import Container from '@mui/material/Container';
import CardList from '../../Components/CardsList/CardList';
import { ReactQueryDevtools } from 'react-query/devtools'

const Home = () => {
  return (
    <>
      <Container maxWidth="lg">
        <CardList/>
      </Container>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  )
}

export default Home;