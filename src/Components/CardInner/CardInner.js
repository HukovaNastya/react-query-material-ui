import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { makeStyles } from "@material-ui/core";
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

const useStyles = makeStyles((theme) => ({
  cardStyles: {
    maxWidth: 450, 
    padding: "20px 30px 10px 30px",
    opacity: 1,
    '&:hover': { opacity: 0.5 } 
  },
  myH5Variant: {
    fontFamily: "Josefin Sans !important",
    fontSize: "32px !important",
    color: "#000",
    fontWeight: "300 !important",
    padding: "20px 0px 0px 0px",
    textAlign: "center"
  }
}));

const CardInner = (props) => {
  console.log(props.index)
  console.log(props);
  const classes = useStyles();
   return (
     <Box>
       <Card 
         className={classes.cardStyles}
        > 
         <CardMedia
           component="img"
           height="240"
           image={`https://img.pokemondb.net/artwork/large/${props.pokemon.name}.jpg`}
           alt={props.pokemon.name}
         />
         <CardContent>
           <Typography  
             variant="h5"
             classes={{h5: classes.myH5Variant}}  
           >
             {props.pokemon.name}
           </Typography>
          </CardContent>
       </Card>
     </Box>
   )
}

export default CardInner;