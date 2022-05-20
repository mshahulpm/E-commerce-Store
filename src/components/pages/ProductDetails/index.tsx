import BreadCrumbs from "@components/common/BreadCrumbs";
import ProductCard from "@components/common/Product/ProductCard";
import ProductBasic from "./ProductBasic";
import ProductCarousel from "./ProductCarousel";
import ProductOption from "./ProductOption";




export default function ProductDetails() {

    return (
        <>
            <BreadCrumbs />
            <section className="product-details spad">
                <div className="container">
                    <div className="row">
                        <ProductCarousel />
                        <div className="col-lg-6">
                            <div className="product__details__text">
                                <ProductBasic />
                                <ProductOption />
                            </div>
                        </div>

                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-12 ">
                            <div className="related__title">
                                <h5>RELATED PRODUCTS</h5>
                            </div>
                        </div>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>

                    <div className="row mt-4">
                        <div className="col-lg-12 ">
                            <div className="related__title">
                                <h5>OTHER SEARCH RESULTS</h5>
                            </div>
                        </div>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </section>
        </>
    )

}