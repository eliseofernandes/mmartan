import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, Grid, Paper } from '@material-ui/core';
import { RootStore } from '../../store/storeConfig';

import useStyles from './styles';

const ProductList: React.FC = () => {
  const classes = useStyles();

  const productsState = useSelector((state: RootStore) => state.products);

  return (
    <div className={classes.root}>
      {productsState?.products &&
        productsState.products.map(item => {
          return (
            <Paper
              key={item.id}
              className={classes.paper}
              elevation={0}
              variant="outlined"
            >
              <Grid container spacing={2}>
                <Grid item sm={4} container spacing={1}>
                  {item.images.map(image => {
                    return (
                      <Grid item xs key={image.id}>
                        <img
                          className={classes.img}
                          alt={image.name}
                          src={`${image.url}/88x130`}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
                <Grid item sm={8} container>
                  <Grid
                    item
                    xs
                    container
                    direction="row"
                    alignItems="center"
                    spacing={2}
                  >
                    <Grid item xs>
                      <Typography gutterBottom variant="h5">
                        {item.name}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        {item.description}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    xs
                    container
                    direction="column"
                    justify="center"
                    alignItems="flex-end"
                    spacing={2}
                  >
                    <Grid item>
                      <Typography variant="h6" color="textSecondary">
                        R$ {item.price} por
                      </Typography>
                      <Typography variant="h5">
                        R$ {item.discount_price}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          );
        })}
    </div>
  );
};

export default ProductList;
