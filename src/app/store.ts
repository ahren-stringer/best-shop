import { configureStore, ThunkAction, Action, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import productsSlice
from '../features/products/productsSlice';
import cartSlice
, { clearCartLocalStorage,
saveProdToCart } 
from '../features/products/cartSlice';

const rootReduser = combineReducers( {
  counter: counterReducer,
  products: productsSlice,
  cart: cartSlice
})

export const store = configureStore({
  reducer: rootReduser,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(saveProdToCart, clearCartLocalStorage)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReduser>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
