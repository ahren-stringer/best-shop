import { Link } from 'react-router-dom';
import { Product } from '../../../features/products/productsSlice';

export interface CatrPropsType {
    cartProds: Product[]
}

function Cart({cartProds}: CatrPropsType) {

    return (
        <section className="cart-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <form>
                            <div className="cart-table table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Товар</th>
                                            <th scope="col">Название</th>
                                            <th scope="col">Цена</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartProds.map(cartItem =>                                         <tr>
                                            <td className="product-thumbnail">
                                                <Link to={cartItem.id}>
                                                    <img src={cartItem.img_url} alt="item" />
                                                </Link>
                                            </td>
                                            <td className="product-name">
                                                <a href="shop-details.html">{cartItem.name}</a>
                                            </td>
                                            <td className="product-price">
                                                <span className="unit-amount">${cartItem.price}</span>
                                            </td>
                                        </tr>)}
                                    </tbody>
                                </table>
                            </div>
                            <div className="cart-buttons">
                                <div className="row align-items-center">
                                    <div className="col-lg-7 col-sm-7 col-md-7">
                                        <Link to='/' className="default-btn">
                                            Вернуться в магазин
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-5">
                                <div className="d-flex align-items-center">
                                    <h3 style={{ marginRight: "15px" }}>Итого</h3>
                                    <span><b>${cartProds.reduce((sum, current)=>sum+current.price,0)}</b></span>
                                </div>

                                <Link to="/checkout" className="default-btn mt-3">
                                    Пререйти к оформлению
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cart;
