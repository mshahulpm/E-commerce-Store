import ProductCard from "@components/common/Product/ProductCard";
import Link from "next/link";

type props = {
    heading: string,
    _link: string,
    products: any[]
}

export default function ProductRow({ heading, _link, products }: props) {

    return (
        <div className="container-fluid px-3 mt-3">
            <div className="d-flex">
                <h3 className="my-3 flex-grow-1 font-weight-bold mobile">{heading}</h3>
                <div>
                    <Link href={_link}>
                        <a>
                            <button className="p-2 px-4 cus-btn primary-btn m-2">View All</button>
                        </a>
                    </Link>
                </div>
            </div>
            <div className="row">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}