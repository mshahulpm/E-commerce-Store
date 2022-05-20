import SimpleSlider from "@components/common/Slider";
import Image from 'next/image';
import DealsOfTheDay from "./DealsOfTheDay";
import ProductRow from "./ProductRow";



export default function Home() {

    return (
        <div>
            <SimpleSlider  >
                {
                    [1, 2, 3].map((item, index) => {
                        return (
                            <div key={index}>
                                <Image
                                    // key={index}
                                    src={`/img/banner/banner-${item}.jpg`}
                                    alt="slider"
                                    width={1800}
                                    height={500}
                                />
                            </div>
                        )
                    })
                }
            </SimpleSlider>

            <DealsOfTheDay />

            {/* Best Sellers */}
            <ProductRow
                heading="Best Sellers"
                _link="/products"
                products={[]}
            />
            {/* Recommendation */}
            <ProductRow
                heading="Recommendation"
                _link="/products"
                products={[]}
            />
        </div>
    )
}