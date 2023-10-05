import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getProducts, selectProducts } from '../../../features/products/productsSlice';
import Preloader from '../../Preloader';
import Catalog from './Catalog';

function CatalogContainer() {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    const allProducts = useAppSelector(selectProducts)

    return allProducts.length
    ? <Catalog allProducts={allProducts}  />
    : <Preloader />;
}

export default CatalogContainer;
