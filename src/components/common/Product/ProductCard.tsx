import { useState } from "react"



export default function ProductCard() {



    return (
        <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 col-6">
            <div className={`product__item rounded `}  >
                <div className="product__item__pic set-bg"
                    style={{
                        backgroundImage: `url(/img/product/product-1.jpg)`
                    }}
                    data-setbg="img/product/product-1.jpg">
                    <span className="label">New</span>
                </div>
                <div className="product__item__text p-2">
                    <h6>Piqué Biker Jacket</h6>

                    <div className="container ">
                        <div className="row row-cols-sm-3">
                            <h5 className="sm-mr-1">$67.24</h5>
                            <h6 className="text-secondary line-through">$75.00</h6>
                            <h6 className="text-success ml-auto" >10% off</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}