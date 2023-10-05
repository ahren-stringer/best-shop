import { useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';

function App(props: any) {
console.log(props)
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(getProducts())
  // }, [])

  // const ss = useAppSelector(selectProducts)
  // console.log(selectProducts)
  // console.log(ss)


  // dispatch(addToCart(1))
  // useEffect(() => {
  //   dispatch(getCartProducts())
  // }, [])
  // const cartProds = useAppSelector(selectCartItems);
  // const cartCount = useAppSelector(state => state.cart)
  // console.log(cartProds)
  // console.log(cartCount)

  return (
    <div className="App">

      <Header />
      <div className="main-wrap">
        <Outlet/>
        {/* <Routes>
          <Route path="/" element={<Catalog />} >
            <Route errorElement={<ErrporPage />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Routes> */}
      </div>
      <Footer />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header> */}
    </div>
  );
}

export default App;
