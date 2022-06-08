import BreadCrumbs from "@components/common/BreadCrumbs";
import Link from "next/link";
import CartItem from "./CartItem";




export default function Cart() {

    return (
        <>
            <BreadCrumbs />
            <section className="shop-cart spad">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="shop__cart__table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <CartItem />
                                        <CartItem />
                                        <CartItem />
                                        <CartItem />

                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="col-md-4">


                            <div className="cart__total__procced">
                                <h6>Cart total</h6>
                                <ul>
                                    <li>Subtotal <span>$ 750.0</span></li>
                                    <li>Total <span>$ 750.0</span></li>
                                </ul>
                                <Link href={'/checkout'}>
                                    <a className="primary-btn">Proceed to checkout</a>
                                </Link>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}