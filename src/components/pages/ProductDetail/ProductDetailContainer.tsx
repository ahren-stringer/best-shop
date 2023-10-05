import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { clearDetailProduct, getSingleProduct } from '../../../features/products/productsSlice';
import { useParams } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import Preloader from '../../Preloader';

function ProductDetailContainer() {

    let { productId } = useParams();

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (productId) {
            dispatch(getSingleProduct((+productId)))
        }
        return () => {
            dispatch(clearDetailProduct())
        }
    }, [])

    const detailProduct = useAppSelector(state => state.products.detailProduct)

    return detailProduct && productId
        ? <ProductDetail detailProduct={detailProduct} productId={productId} />
        : <Preloader />;
}

export default ProductDetailContainer;
