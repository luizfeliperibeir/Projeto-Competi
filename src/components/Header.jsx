/*import React, { useEffect, useState } from "react";
import { ReactComponent as Logo02 } from './logo02.svg'
import { ReactComponent as Logo } from './logo01.svg'
import './Header.css'
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    CircularProgress,
    Toolbar,
    AppBar,
    TextField,
    Button
  } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";  
import { fade, makeStyles } from "@material-ui/core/styles";


const Header = () => {
    const classes = useStyles();
    const { history } = props;
    const [pokemonData, setPokemonData] = useState({});
    const [filter, setFilter] = useState("");

    return(
        <Header className="styles.header">
            <nav>
                <div className="Container">
                    <div className="Logo01Container">
                        < Logo />
                    </div>
                    <div className="Logo01Container">
                        < Logo02 />
                    </div>
                    <div className="Button">
                        <Button type="button">Login</Button>
                    </div>
                    <div className="Search">
                    <>
                        <AppBar position="static" style={{backgroundColor: "rgba(82, 65, 83, 1)", textAlign:"center"}}>
                            <Toolbar>
                            <div className={classes.searchContainer}>
                                <SearchIcon className={classes.searchIcon} />
                                <TextField
                                className={classes.searchInput}
                                onChange={handleSearchChange}
                                label="Pesquisar Pokemon"
                                variant="standard"
                                />
                            </div>
                            </Toolbar>
                        </AppBar>
                        {pokemonData ? (
                            <Grid container spacing={2} className={classes.pokedexContainer}>
                            {Object.keys(pokemonData).map(
                                (pokemonId) =>
                                pokemonData[pokemonId].name.includes(filter) &&
                                getPokemonCard(pokemonId)
                            )}
                            </Grid>
                        ) : (
                            <CircularProgress />
                        )}
                        </>
                    </div>
                </div>
            </nav>
        </Header>
    )
}

export default Header
*/