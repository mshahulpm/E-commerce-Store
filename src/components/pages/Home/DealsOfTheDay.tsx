import CategoryCard from "@components/common/Product/CatogoryCard"



export default function DealsOfTheDay() {


    return (
        <div className="px-3 mt-5">
            <h3 className="my-3 font-weight-bold mobile">Deals Of The day</h3>
            <div className="d-flex  overflow-auto styled-scrollbar">
                {
                    new Array(10).fill(1).map((item, index) => {
                        return (
                            <CategoryCard key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}