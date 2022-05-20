import Modal from "./Modal";

type props = {
    open: boolean
    onClose: (e: any) => void
}


export default function Confirm({
    open,
    onClose
}: props) {

    return (
        <Modal open={open} >
            <div
                style={{
                    marginTop: "150px",
                }}
            >
                <div className="_modal-child">
                    <div className="d-flex justify-content-between mb-5">
                        <h6 className="_bold">Are You Sure ?</h6>
                        <button onClick={onClose} className="cus-btn text-light bg-danger p-1 px-3" >X</button>
                    </div>
                    <div className="d-flex justify-content-between mt-5">
                        <button className="cus-btn text-light bg-danger p-1 px-3">Cancel</button>
                        <button className="cus-btn text-light bg-info p-1 px-3">Confirm</button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}