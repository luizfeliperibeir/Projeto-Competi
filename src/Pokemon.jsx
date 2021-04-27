import React, { useEffect, useState } from "react";
import { Typography, Link, CircularProgress, Button } from "@material-ui/core";
import { toFirstCharUppercase } from "./Constants";
import axios from "axios";
import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    styles: {
        Color: "rgba(224, 215, 236, 1)",
    }
  }));

const Pokemon = (props) => {
  const { match, history } = props;
  const { params } = match;
  const { pokemonId } = params;
  const [pokemon, setPokemon] = useState(undefined);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then(function (response) {
        const { data } = response;
        setPokemon(data);
      })
      .catch(function (error) {
        setPokemon(false);
      });
  }, [pokemonId]);

  const generatePokemonJSX = (pokemon) => {
    const { name, id, species, height, weight, types, sprites } = pokemon;
    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
    const { front_default } = sprites;
    return (
      <div className="styles">
        <Typography variant="h1" >
          {`${id}.`} {toFirstCharUppercase(name)}
          <img src={front_default} />
        </Typography>
        <img style={{ width: "300px", height: "300px" }} src={fullImageUrl} />
        <Typography variant="h3">Pokemon Info</Typography>
        <Typography>
          {"Species: "}
          <Link href={species.url}>{species.name} </Link>
        </Typography>
        <Typography>Height: {height} </Typography>
        <Typography>Weight: {weight} </Typography>
        <Typography variant="h6"> Types:</Typography>
        {types.map((typeInfo) => {
          const { type } = typeInfo;
          const { name } = type;
          return <Typography key={name}> {`${name}`}</Typography>;
        })}
      </div>
    );
  };

  return (
    <>
      {pokemon === undefined && <CircularProgress />}
      {pokemon !== undefined && pokemon && generatePokemonJSX(pokemon)}
      {pokemon === false && <Typography> Pokemon não encontrado</Typography>}

      {pokemon !== undefined && (
        <Button variant="contained" onClick={() => history.push("/")} style={{ textAlign: 'center' }}>
          Voltar ao Pokedex
        </Button>
      )}
    </>
  );
};

export default Pokemon;