

type props = {
    children: React.ReactNode
    open: boolean
}

export default function Modal({
    children,
    open
}: props) {

    if (!open) return null
    return (
        <div className="_modal ">
            <div className="relative _center">
                {children}
            </div>
        </div>
    )
}