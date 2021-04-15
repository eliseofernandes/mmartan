import {
  AppBar,
  IconButton,
  InputBase,
  Paper,
  Toolbar,
} from '@material-ui/core';
import { Cancel, Search as SearchIcon } from '@material-ui/icons';
import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import useStyles from './styles';
import logo from '../../assets/logo.svg';
import { setFilter } from '../../store/actions/product';

const Header: React.FC = () => {
  const classes = useStyles();
  const dispacth = useDispatch();
  const [searchText, setSearchText] = useState('');

  const handleChangeBlurSearch = (
    event: React.FocusEvent<HTMLInputElement>,
  ) => {
    const name = event.target.value;
    dispacth(setFilter({ name }));
    setSearchText(name);
  };

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setSearchText(name);
  };

  const handleKeyPressSearch = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.which === 13) {
      dispacth(setFilter({ name: searchText }));
    }
  };

  // eslint-disable-next-line
  const handleChangeDelete = (event: any) => {
    const name = '';
    dispacth(setFilter({ name }));
    setSearchText(name);
  };

  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <div className={classes.titleDiv} id="search-product-list">
          <img alt="mmartan" src={logo} className={classes.title} />
        </div>

        <Paper variant="outlined" className={classes.input}>
          <IconButton aria-label="pesquisa">
            <SearchIcon />
          </IconButton>
          <InputBase
            placeholder="Pesquisar"
            value={searchText}
            inputProps={{ 'aria-label': 'pesquisar-produtos' }}
            onChange={handleChangeSearch}
            onBlur={handleChangeBlurSearch}
            onKeyDown={handleKeyPressSearch}
          />
          {!!searchText && (
            <IconButton
              aria-label="apagar-pesquisa"
              onClick={handleChangeDelete}
            >
              <Cancel />
            </IconButton>
          )}
        </Paper>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
