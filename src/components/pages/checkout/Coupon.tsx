



export default function Coupon() {

    return (
        <div className="discount__content">
            <h6>Discount codes</h6>
            <form action="#">
                <input type="text" placeholder="Enter your coupon code" />
                <button type="submit" className="site-btn">Apply</button>
            </form>
        </div>
    )
}