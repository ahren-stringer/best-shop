import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import Preloader from '../../Preloader';
import { clearCartList, getCartProducts, selectCartItems } from '../../../features/products/cartSlice';
import Cart from './Cart';
import CartEmpty from './CartEmpty';

function CartContainer() {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getCartProducts())

        return () => {
            dispatch(clearCartList())
        }
    }, [])

    const cartProds = useAppSelector(selectCartItems);
    const cartstatus = useAppSelector(state => state.cart.status);

    return cartstatus==='loading' ? <Preloader /> 
    : cartProds.length ? <Cart cartProds={cartProds} /> :  <CartEmpty/>

}

export default CartContainer;
