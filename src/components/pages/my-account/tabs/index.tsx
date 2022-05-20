import Address from "./Address"
import Orders from "./Orders"
import Personal from "./Personal"
import Questions from "./Questions"
import Reviews from "./Review"

type props = {
    active: number
}

export default function MyAccountTabs({ active }: props) {

    const tabs = [
        <Personal key={0} />,
        <Address key={1} />,
        <Orders key={2} />,
        <Reviews key={2} />,
        <Questions key={4} />
    ]

    return (
        <>
            {tabs[active]}
        </>
    )
}