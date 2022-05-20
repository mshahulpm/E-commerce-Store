
type props = {
    handleSideBar: (e: boolean) => void
}


export default function Header({ handleSideBar }: props) {

    return (
        <>
            <header className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-2">
                            <div className="header__logo">
                                <a href="./index.html"><img src="/img/logo.png" alt="" /></a>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <nav className="header__menu">
                                <ul>
                                    <li className="active"><a href="./index.html">Home</a></li>
                                    <li><a href="#">Women’s</a></li>
                                    <li><a href="#">Men’s</a></li>
                                    <li><a href="./shop.html">Shop</a></li>
                                    <li><a href="#">Pages</a>
                                        <ul className="dropdown">
                                            <li><a href="./product-details.html">Product Details</a></li>
                                            <li><a href="./shop-cart.html">Shop Cart</a></li>
                                            <li><a href="./checkout.html">Checkout</a></li>
                                            <li><a href="./blog-details.html">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="./blog.html">Blog</a></li>
                                    <li><a href="./contact.html">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3">
                            <div className="header__right">
                                <div className="header__right__auth">
                                    <a href="#">Login</a>
                                    <a href="#">Register</a>
                                </div>
                                <ul className="header__right__widget">
                                    <li><span className="icon_search search-switch"></span></li>
                                    <li><a href="#"><span className="icon_heart_alt"></span>
                                        <div className="tip">2</div>
                                    </a></li>
                                    <li><a href="#"><span className="icon_bag_alt"></span>
                                        <div className="tip">2</div>
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="canvas__open">
                        <i onClick={(e) => handleSideBar(true)} className="fa fa-bars"></i>
                    </div>
                </div>
            </header>
        </>
    )
}