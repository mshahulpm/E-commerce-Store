import Address from "./Address"
import Coupon from "./Coupon"

export default function Checkout() {

    return (
        <>
            <section className="checkout spad">

                <div className="container-fluid px-4 ">
                    <div className="row">
                        <div className="col-lg-4 mx-auto checkout__form" >

                            <Address />
                        </div>
                        <div className="col-lg-3 mx-auto">
                            <div className=" checkout__form">
                                <h5>Your order</h5>

                                <div className="checkout__order__product">
                                    <ul>
                                        <li>
                                            <span className="top__text">Product</span>
                                            <span className="top__text__right">Total</span>
                                        </li>
                                        <li>01. Chain buck bag <span>$ 300.0</span></li>
                                        <li>02. Zip-pockets pebbled<br /> tote briefcase <span>$ 170.0</span></li>
                                        <li>03. Black jean <span>$ 170.0</span></li>
                                        <li>04. Cotton shirt <span>$ 110.0</span></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-3 mx-auto">
                            <Coupon />
                            <div className="checkout__order__total">
                                <ul>
                                    <li>Subtotal <span>$ 750.0</span></li>
                                    <li>Total <span>$ 750.0</span></li>
                                </ul>
                            </div>
                            <div className="checkout__order__widget">

                                <label htmlFor="_cod">
                                    COD
                                    <input type="radio" id="_cod" name="payment" />
                                    <span className="checkmark"></span>
                                </label>
                                <label htmlFor="_online">
                                    Online
                                    <input type="radio" id="_online" name='payment' />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <button type="submit" className="site-btn">Place oder</button>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

