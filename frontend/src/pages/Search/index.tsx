import {
  Typography,
  Container,
  CssBaseline,
  Box,
  Divider,
  LinearProgress,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';
import Pagination from '../../components/Pagination';

import useStyles from './styles';
import { fechProducts } from '../../store/actions/product';
import { RootStore } from '../../store/storeConfig';

const Search: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const productsTotalState = useSelector(
    (state: RootStore) => state.products?.total,
  );
  const filterState = useSelector((state: RootStore) => state?.filter);
  const loadingState = useSelector((state: RootStore) => state?.loading);

  useEffect(() => {
    dispatch(fechProducts(filterState));
  }, [dispatch, filterState]);

  return (
    <>
      <CssBaseline />
      <Header />
      <main className={classes.content}>
        <div className={classes.title}>
          <Typography variant="h3" component="div">
            <Box fontWeight="fontWeightLight" ml={3} mb={3}>
              {!filterState?.name ? 'Lista de produtos' : filterState?.name}
            </Box>
          </Typography>
          {loadingState && (
            <LinearProgress
              classes={{
                colorPrimary: classes.loadingColorPrimary,
                barColorPrimary: classes.loadingBarColorPrimary,
              }}
            />
          )}
        </div>
        <Container maxWidth="lg">
          {!!productsTotalState && (
            <Typography variant="body2" component="div">
              <Box fontWeight="fontWeightLight" mt={1} ml={1} mb={1}>
                {productsTotalState} PRODUTO(S) ENCONTRADO(S)
                <Divider classes={{ root: classes.dividerTotal }} />
              </Box>
            </Typography>
          )}
          <ProductList />
          <Pagination />
        </Container>
      </main>
    </>
  );
};

export default Search;
