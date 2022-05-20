



export default function Orders() {

    return (
        <>
            <div className=" p-4 rounded">
                <h5 className="_bold">All Orders</h5>
                <OrderItem
                    date="12/12/2020"
                    order_no="1234GATG5141"
                    total="$100.00"
                    no_of_items="2"
                    status="Delivered"
                />
                <OrderItem
                    date="12/12/2020"
                    order_no="1234GATG5141"
                    total="$100.00"
                    no_of_items="2"
                    status="Processing"
                />
                <OrderItem
                    date="12/12/2020"
                    order_no="1234GATG5141"
                    total="$100.00"
                    no_of_items="2"
                    status="Cancelled"
                />
            </div>
        </>
    )
}


type orderItemProps = {
    date: string,
    order_no: string,
    total: string,
    no_of_items: string | number,
    status: string
}

function OrderItem({
    date,
    order_no,
    total,
    no_of_items,
    status
}: orderItemProps) {

    const statusColor = status === "Delivered" ? "text-success" :
        status === 'Cancelled' ? "text-danger" : 'text-info';

    return (
        <div className="border rounded hover-gray pointer shadow p-2 mt-2">
            <div className="d-flex justify-content-between">
                <div>
                    <h6 className="_bold">Order #{order_no}</h6>
                    <p className="">{date}</p>
                </div>
                <div>
                    <h6 className="_bold">{total}</h6>
                    <p>{no_of_items} items</p>
                </div>
                <div>
                    <h6 className={`_bold mr-2 ${statusColor}`}>{status}</h6>
                </div>
            </div>
        </div>
    )
}