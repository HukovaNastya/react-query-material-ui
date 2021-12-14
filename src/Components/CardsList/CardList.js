import React from 'react';
import { useQuery } from 'react-query';
import Container from '@mui/material/Container';
import CardInner from '../CardInner/CardInner';
import Grid from '@mui/material/Grid';

const fetchPokemons = async () => {
  const url = `https://pokeapi.co/api/v2/pokemon`;
  const res = await fetch(url).then(res => res.json());
  return res;
}
  
const CardList = ({ children }) => {
  const { data, status } = useQuery('pokemons', fetchPokemons);
  return (
    <div>
      {status === 'loading' && (
        <div>Loading data</div>
      )}

      {status === 'error' && (
        <div>Error fetching data</div>
      )}

      {status === 'success' && (
        <div>
          <Container maxWidth="lg"  style={{marginTop: 80}} >
            <Grid container spacing={5} justifyContent="center" alignItems="center">
              {data.results.map((pokemon, index) =>
                (<Grid item   >
                   <CardInner
                     key={index}
                     index={index + 1}
                     pokemon= {pokemon}
                     url={pokemon.url}
                   />
                 </Grid>
                ))
              }
            </Grid>
          </Container>
        </div>
       )} 
    </div>
  );
};

export default CardList;