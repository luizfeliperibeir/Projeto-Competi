import { Card, CardContent, CardMedia, Grid, Typography, makeStyles } from '@material-ui/core';

import React from 'react';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
	cardMedia: {
		margin: 'auto',
		backgroundColor: 'rgba(126, 115, 148, 1)',
	},
	cardContent: {
		textAlign: 'center',
		backgroundColor: 'rgba(224, 215, 236, 1)',
	},
}));

const CustomCard = ({ pokemon }) => {
	const classes = useStyles();
	const history = useHistory();

	return (
		<Grid item xs={4} key={pokemon.name} onClick={() => null}>
			<Card style={{ borderWidth: 0, backgroundColor: 'rgba(126, 115, 148, 1)' }}>
				{/* onClick={() => history.push(`/${id}`)} */}
				<CardMedia
					className={classes.cardMedia}
					image={pokemon.sprites.front_default}
					style={{ width: '240px', height: '240px' }}
				/>
				<CardContent className={classes.cardContent} style={{}}>
					<Typography>{pokemon.name}</Typography>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default CustomCard;
