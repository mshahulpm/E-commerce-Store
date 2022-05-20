import ProductCard from "@components/common/Product/ProductCard";




export default function CategoryDetails() {

    return (
        <>
            <section className="breadcrumb-blog set-bg"
            // style={{
            //     backgroundImage: 'url(/img/breadcrumb-bg.jpg)'
            // }}
            >
                <img src="/img/breadcrumb-bg.jpg" alt="" />
                <h2>Our Blog</h2>
            </section>
            <div className="container-fluid ps-2">
                <div className="row mt-4">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </>
    )


}