



export default function ProductBasic() {

    return (
        <>
            <h3>Essential structured blazer <span>Brand: SKMEIMore Men Watches from SKMEI</span></h3>
            <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <span>( 138 reviews )</span>
            </div>
            <div className="product__details__price">$ 75.0 <span>$ 83.0</span></div>
            <p>Nemo enim ipsam voluptatem quia aspernatur aut odit aut loret fugit, sed quia consequuntur
                magni lores eos qui ratione voluptatem sequi nesciunt.</p>
            <div className="product__details__button">
                <div className="quantity">
                    <span>Quantity:</span>
                    <div className="pro-qty">
                        <input type="text" value="1" />
                    </div>
                </div>
                <a href="#" className="cart-btn"><span className="icon_bag_alt"></span> Add to cart</a>
                <ul>
                    <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                    <li><a href="#"><span className="icon_adjust-horiz"></span></a></li>
                </ul>
            </div>
        </>
    )
}