import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import productReducer from './reducers/product';

const Store = createStore(
  productReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export type RootStore = ReturnType<typeof productReducer>;

export default Store;
