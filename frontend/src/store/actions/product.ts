import axios from 'axios';
import { Dispatch } from 'redux';

import {
  PRODUCT_SET,
  PRODUCT_FILTER_SET,
  PRODUCT_LOADING,
  PRODUCT_ERROR,
  Filter,
  ProductDispatchTypes,
  ProductList,
} from '../actionTypes';

export const setFilter = (filter: Filter) => (
  dispatch: Dispatch<ProductDispatchTypes>,
): void => {
  dispatch({
    type: PRODUCT_FILTER_SET,
    payload: filter,
  });
};

export const fechProducts = (filter?: Filter) => (
  dispatch: Dispatch<ProductDispatchTypes>,
): void => {
  dispatch({
    type: PRODUCT_LOADING,
  });

  axios
    .get<ProductList>(`${process.env.REACT_APP_API_ENDPOINT}/product/`, {
      params: filter,
    })
    .then(res => {
      dispatch({
        type: PRODUCT_SET,
        payload: res.data,
      });
    })
    .catch(() => {
      dispatch({
        type: PRODUCT_ERROR,
      });
    });
};
