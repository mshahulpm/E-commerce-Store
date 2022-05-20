

const SIDE_BAR_ITEMS = [
    { id: 0, label: 'My Account', icon: 'fa fa-user' },
    { id: 1, label: 'My Address', icon: 'fa fa-map-marker' },
    { id: 2, label: 'My Orders', icon: 'fa fa-shopping-cart' },
    { id: 3, label: 'My Reviews', icon: 'fa fa-comments' },
    { id: 4, label: 'My Questions', icon: 'fa fa-question' },
]


type props = {
    active: number
    setActive: (active: number) => void
}


export default function SideBar({
    active,
    setActive
}: props) {

    return (
        <div className="col-sm-4 col-2  _my-ac-child">
            <div className="side-bar only-lg d-flex p-2 mt-2 border rounded shadow">
                <div>
                    <img src='/img/profile.svg' />
                </div>
                <div className="ml-2 mt-2 _bold">
                    <h6 className="">Hello,</h6>
                    <h5 className="_bold">Mohammed Shahul</h5>
                </div>
            </div>

            {
                SIDE_BAR_ITEMS.map((item, index) => (
                    <SideItem
                        key={index}
                        active={active === item.id}
                        icon={item.icon}
                        label={item.label}
                        onClick={() => setActive(item.id)}
                    />
                ))
            }
        </div>
    )
}


type sideItemProps = {
    active: boolean,
    onClick: () => void,
    label: string,
    icon: string
}

function SideItem({ active, onClick, label, icon }: sideItemProps) {

    return (
        <div onClick={onClick}
            className={`side-bar p-3 mt-3 pointer hover-gray ${active ? 'shadow text-primary' : ''}`}>
            <i className={` pr-2 ${icon}`} aria-hidden="true"></i>
            <span className="only-lg">{label}</span>
        </div>
    )
}