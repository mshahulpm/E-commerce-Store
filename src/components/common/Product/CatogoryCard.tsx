



export default function CategoryCard() {


    return (
        <div className="category-card mx-3 ">
            <div className={`product__item rounded `}  >
                <div className="product__item__pic set-bg my-2"
                    style={{
                        backgroundImage: `url(/img/product/product-1.jpg)`
                    }}
                    data-setbg="img/product/product-1.jpg">
                </div>
                <div className="text-center">
                    <h6 className="font-weight-bold">Hot Deals</h6>

                    <div className="container mb-2">
                        <h6 className="text-success ml-auto" >10% off</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}