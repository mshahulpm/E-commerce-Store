import Link from "next/link"

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
                                <Link href={'/'}>
                                    <a ><img src="/img/logo.png" alt="" /></a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <nav className="header__menu">
                                <ul>
                                    <li className="active">
                                        <Link href={'/'}>
                                            <a>Home</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/category/women'}>
                                            <a >Women’s</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/category/men'}>
                                            <a href="#">Men’s</a>
                                        </Link>
                                    </li>
                                    <li><a href="#">Shop</a></li>
                                    {/* <li><a href="#">Pages</a>
                                        <ul className="dropdown">
                                            <li><a href="./product-details.html">Product Details</a></li>
                                            <li><a href="./shop-cart.html">Shop Cart</a></li>
                                            <li><a href="./checkout.html">Checkout</a></li>
                                            <li><a href="./blog-details.html">Blog Details</a></li>
                                        </ul>
                                    </li> */}
                                    <li><a href="#">Blog</a></li>
                                    {/* <li><a href="./contact.html">Contact</a></li> */}
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3">
                            <div className="header__right">

                                <div className="header__right__auth">
                                    <Link href={'/login'}>
                                        <a>Login/Register</a>
                                    </Link>
                                </div>
                                <ul className="header__right__widget">
                                    <li><span className="icon_search search-switch"></span></li>
                                    <li>
                                        <Link href={'/my-account'}>
                                            <a ><span className="fa fa-user-circle-o"></span>
                                                {/* <div className="tip">2</div> */}
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/cart'}>
                                            <a ><span className="icon_bag_alt"></span>
                                                <div className="tip">2</div>
                                            </a>
                                        </Link>
                                    </li>
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