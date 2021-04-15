import {
  PRODUCT_SET,
  PRODUCT_FILTER_SET,
  PRODUCT_LOADING,
  PRODUCT_ERROR,
  ProductList,
  Filter,
  ProductDispatchTypes,
} from '../actionTypes';

interface IInitialState {
  loading: boolean;
  error: boolean;
  products?: ProductList;
  filter: Filter;
}

const initialState: IInitialState = {
  loading: false,
  error: false,
  filter: { name: '', page: 1, limit: 15 },
};

const reducer = (
  state: IInitialState = initialState,
  action: ProductDispatchTypes,
): IInitialState => {
  switch (action.type) {
    case PRODUCT_SET:
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: false,
      };
    case PRODUCT_FILTER_SET:
      return {
        ...state,
        filter: { ...state.filter, ...action.payload },
      };
    case PRODUCT_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
