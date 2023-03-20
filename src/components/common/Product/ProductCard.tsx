import Link from "next/link"
import { useState } from "react"
import { config } from "src/constants"


type props = {
    product: any
}

export default function ProductCard({ product }: props) {

    console.log(product)

    return (
        <Link href={'/product/product-1'} >
            <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 col-6 pointer">
                <div className={`product__item rounded `}  >
                    <div className="product__item__pic set-bg"
                        style={{
                            backgroundImage: `url(${config.FILE_SERVER + product.images?.[0]})`
                        }}
                        data-setbg="img/product/product-1.jpg">
                        <span className="label">New</span>
                    </div>
                    <div className="product__item__text p-2">
                        <h6>{product.name}</h6>

                        <div className="container ">
                            <div className="row row-cols-sm-3">
                                <h5 className="sm-mr-1">${product.price}</h5>
                                <h6 className="text-secondary line-through">$75.00</h6>
                                <h6 className="text-success ml-auto" >10% off</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}