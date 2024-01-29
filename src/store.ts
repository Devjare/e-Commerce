import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/reducers';
// import thunk from 'redux-thunk';

//There's no need to add the thunk middleware if using the
// react-toolik dependency. confdigureStore already adds 
// the thunk middleware by deafult.
// const middleware = [thunk];

const initialState = {};
const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  // middleware: () => new Tuple(middleware)
}
);

export default store;

