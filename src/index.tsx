import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import './responsive.css'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrporPage from './components/pages/404';
import Checkout from './components/pages/Checkout';
import ProductDetailContainer from './components/pages/ProductDetail/ProductDetailContainer';
import CatalogContainer from './components/pages/Catalog/CatalogContainer';
import CartContainer from './components/pages/Cart/CartContainer';
import Thanks from './components/pages/Thanks';

const container = document.getElementById('root')!;
const root = createRoot(container);

// store.dispatch(getProducts())

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrporPage />,
    children: [
      { index: true, element: <CatalogContainer /> },
      {
        path: 'products/:productId',
        element: <ProductDetailContainer />
      },
      {
        path: "cart/",
        element: <CartContainer />
      },
      {
        path: "checkout/",
        element: <Checkout />
      },
      {
        path: "/thanks",
        element: <Thanks/>
      },
    ],
  },
])


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
