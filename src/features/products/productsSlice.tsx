import { Middleware, PayloadAction, createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import {  fetchProducts, fetchProductsByIds, fetchSingleProduct } from "../../app/fakeApi";

export interface Product {
    id: string,
    name: string,
    description: string,
    img_url: string,
    price: number
}
interface prodsState {
    status: string,
    detailProduct: Product | null,
    detailProductStatus: string,
  }
const prodsAdapter = createEntityAdapter<Product>();

/*
* НОРМ в плане типизации
*/
let initState: prodsState ={
    status: 'idle',
    detailProduct: null,
    detailProductStatus: 'idle',
}

let initialState = prodsAdapter.getInitialState(initState)

// --- Санки ----------------------------------------

export const getProducts = createAsyncThunk('prods/getProds', async () => {
    return (await fetchProducts()) as Product[]
})

// --- Конец - Санки ----------------------------------------

// --- Санки ----------------------------------------

export const getSingleProduct = createAsyncThunk('prods/getSingleProduct', async (prodId: number) => {
    return (await fetchSingleProduct(prodId)) as Product
})

// --- Конец - Санки ----------------------------------------

// --- Редьюсер ----------------------------------------
const productsSlice = createSlice({
    name: 'prods',
    initialState,
    reducers: {
        clearDetailProduct: (state) => {
            state.detailProduct = null
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                prodsAdapter.setAll(state, action.payload)
                state.status = 'idle'
            })
            .addCase(getSingleProduct.pending, (state, action) => {
                state.detailProductStatus = 'loading'
            })
            .addCase(getSingleProduct.fulfilled, (state, action) => {
                state.detailProduct = action.payload
                state.detailProductStatus = 'idle'
            })
    }
})

// --- Конец - Редьюсер ----------------------------------------


// --- Селекторы ----------------------------------------
export const { selectAll: selectProducts, selectById, selectEntities } = prodsAdapter.getSelectors((state: RootState) => state.products)


// --- Конец - Селекторы ----------------------------------------

export const { clearDetailProduct } = productsSlice.actions

export default productsSlice.reducer