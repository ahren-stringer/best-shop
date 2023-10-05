import { Link } from 'react-router-dom';
import { Product } from '../../../features/products/productsSlice';

export interface catalogPropsType {
    allProducts: Product[]
}

function Catalog({allProducts}: catalogPropsType) {

    return (
        <section className="top-products-area pt-100 pb-70">
            <div className="container">
                {/* <!-- <div className="section-title">
        <h2>Trending Products</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua quis ipsum suspendisse</p>
    </div> --> */}

                <div className="row">

                    {
                        allProducts.map(product => <div key={product.id} className="col-lg-3 col-md-6">
                            <div className="top-products-item">
                                <div className="products-image">
                                    <Link to={`products/${product.id}`}>
                                        <img src={product.img_url}
                                         alt="image" />
                                    </Link>
                                </div>
                                <div className="products-content">
                                    <h3>
                                        <Link to={`products/${product.id}`}>{product.name}</Link>
                                    </h3>
                                    <div className="price">
                                        <span className="new-price">{product.price}</span>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }

                </div>
            </div>
        </section>

    );
}

export default Catalog;
