import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MenuItem, TextField, Grid, Typography } from '@material-ui/core';
import { Pagination as PaginationItems } from '@material-ui/lab';
import { RootStore } from '../../store/storeConfig';

import useStyles from './styles';
import { setFilter } from '../../store/actions/product';

const Pagination: React.FC = () => {
  const classes = useStyles();
  const dispacth = useDispatch();

  const productsTotalState = useSelector(
    (state: RootStore) => state.products?.total,
  );

  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState<number | undefined>();
  const [totalItemsPage, setTotalItemsPage] = useState(15);

  useEffect(() => {
    setTotalItems(productsTotalState);
  }, [productsTotalState]);

  const handleClick = () => {
    const anchor = document.querySelector('#search-product-list');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setPage(value);
    dispacth(setFilter({ page: value }));
    handleClick();
  };

  const handleChangeTotalItems = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const limit = parseInt(event.target.value, 10);
    setTotalItemsPage(limit);
    dispacth(setFilter({ limit }));
  };

  const totalItemsPageList = [
    {
      value: '5',
      label: '05 produtos por página',
    },
    {
      value: '15',
      label: '15 produtos por página',
    },
    {
      value: '20',
      label: '20 produtos por página',
    },
  ];

  return (
    <div className={classes.root}>
      {totalItems && Math.round(totalItems / totalItemsPage) > 1 ? (
        <Grid container spacing={2}>
          <Grid item sm={8} container>
            <Grid item xs>
              <TextField
                select
                value={totalItemsPage}
                onChange={handleChangeTotalItems}
                variant="outlined"
                margin="dense"
              >
                {totalItemsPageList.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <Grid
            item
            sm={4}
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs>
              <PaginationItems
                count={Math.round(totalItems / totalItemsPage)}
                page={page}
                onChange={handleChangePage}
                variant="outlined"
                shape="rounded"
              />
            </Grid>
          </Grid>
        </Grid>
      ) : (
        productsTotalState === 0 && (
          <Typography variant="body2" component="div">
            Nenhum Produto Encontrado
          </Typography>
        )
      )}
    </div>
  );
};

export default Pagination;
