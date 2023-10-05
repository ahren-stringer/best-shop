import { Middleware, PayloadAction, createAsyncThunk, createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchProducts, fetchProductsByIds } from "../../app/fakeApi";
import { Product } from "./productsSlice";

const cartAdapter = createEntityAdapter<Product>();

/*
* ГАВНО в плане типизации
*/
const initialState = cartAdapter.getInitialState({
    status: 'idle',
    cartCount: + (localStorage.getItem('cart')?.split(',').length || 0)
})

// --- Санки ----------------------------------------

export const getCartProducts = createAsyncThunk('cart/getCartProds', async () => {
debugger
    let cartIdsArr: string | null= localStorage.getItem('cart');

    if (cartIdsArr){
        return (await fetchProductsByIds(JSON.parse(cartIdsArr))) as Product[]
    }else{
        return []
    }


})

// --- Конец - Санки ----------------------------------------

// --- Редьюсер ----------------------------------------
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<number>) => {
            state.cartCount = action.payload
        },
        clearCart: (state) => {
            state.cartCount = 0
        },
        clearCartList: (state) => {
            cartAdapter.removeAll(state)
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getCartProducts.pending, (state, action) => {
                debugger
                state.status = 'loading'
            })
            .addCase(getCartProducts.fulfilled, (state, action) => {
                debugger
                cartAdapter.setAll(state, action.payload)
                state.status = 'idle'
            })
    }
})

// --- Конец - Редьюсер ----------------------------------------

export const { addToCart, clearCart, clearCartList } = cartSlice.actions


// --- Мидлваре ----------------------------------------

export const saveProdToCart: Middleware<
    {},
    RootState
> = storeApi => next => action => {
    if (action.type === 'cart/addToCart') {

        let id = action.payload;
        let cartStr = localStorage.getItem('cart');

        if (!cartStr) {
            let aa = JSON.stringify([id])
            localStorage.setItem('cart', aa)
        }
        else {
            let cartArr = JSON.parse(cartStr);
            if (!cartArr.some((item: number) => item == id)) {
                cartArr.push(id)
                let aa = JSON.stringify(cartArr);
                localStorage.setItem('cart', aa)
            }
        }
        // storeApi.dispatch( addToCart( JSON.parse(localStorage?.getItem('cart')|| '').length ) )
        action.payload = JSON.parse(localStorage?.getItem('cart') || '').length
    }

    next(action)
}

export const clearCartLocalStorage: Middleware<
    {},
    RootState
> = storeApi => next => action => {

    if (action.type === 'cart/clearCart') {
        debugger
        localStorage.removeItem('cart');
    }

    next(action)
}

// --- Конец - Мидлваре ----------------------------------------


// --- Селекторы ----------------------------------------

export const { selectAll: selectCartItems, selectById, selectEntities } = cartAdapter.getSelectors((state: RootState) => state.cart)
// --- Конец - Селекторы ----------------------------------------

export default cartSlice.reducer