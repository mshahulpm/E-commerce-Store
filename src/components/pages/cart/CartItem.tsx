




export default function CartItem() {

    return (
        <tr>
            <td className="cart__product__item">
                <img src="/img/shop-cart/cp-1.jpg" alt="" />
                <div className="cart__product__item__title">
                    <h6>Chain bucket bag</h6>
                    <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                </div>
            </td>
            <td className="cart__price">$ 150.0</td>
            <td className="cart__quantity">
                <div className="pro-qty">
                    <input type="text" value="1" />
                </div>
            </td>
            <td className="cart__total">$ 300.0</td>
            <td className="cart__close"><span className="icon_close"></span></td>
        </tr>
    )
}