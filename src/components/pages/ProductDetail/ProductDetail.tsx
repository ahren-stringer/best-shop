import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { Product, getSingleProduct } from '../../../features/products/productsSlice';
import { addToCart } from '../../../features/products/cartSlice';
import { url } from "inspector";

export interface ProductDetailPropsType {
    productId: string
    detailProduct: Product
}

function ProductDetail({productId, detailProduct}: ProductDetailPropsType) {

    const dispatch = useAppDispatch();

    const addToCartHandler = () =>{
        if(productId){
            dispatch(addToCart(+productId))
        }
    }

    return (
        <section className="product-details-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="product-details-image" style={{backgroundImage: `url(${detailProduct?.img_url})`}}></div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="product-details-desc">
                                    <h3>{detailProduct?.name}</h3>
                                    <div className="price">
                                        <span className="new-price">${detailProduct?.price}</span>
                                    </div>
                                    <p>{detailProduct?.description}</p>
                                    <div className="product-add-to-cart">

                                        <button 
                                        onClick={()=>{addToCartHandler()}}
                                        type="submit" 
                                        className="default-btn" 
                                        data-prodId={detailProduct?.id}>
                                            В корзину
                                            <span></span>
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default ProductDetail;
