import Modal from "@components/common/Modal";


type props = {
    open: boolean
    onClose: (e: any) => void
}



export default function AddressForm({
    open,
    onClose
}: props) {

    return (
        <Modal
            open={open}
        >
            <div className="_modal-child">
                <form action="#" className=" checkout__form">
                    <div className="d-flex mb-3 justify-content-between">
                        <h6 className="_bold">Add New Address</h6>
                        <button onClick={onClose} className="cus-btn px-3 p-1 bg-danger text-light">X</button>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="checkout__form__input">
                                <p>First Name <span>*</span></p>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="checkout__form__input">
                                <p>Last Name <span>*</span></p>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="checkout__form__input">
                                <p>Address <span>*</span></p>
                                <input type="text" placeholder="Street Address" />
                                <input type="text" placeholder="Apartment. suite, unite ect ( optional )" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="checkout__form__input">
                                <p>Town/City <span>*</span></p>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="checkout__form__input">
                                <p>Country/State <span>*</span></p>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="checkout__form__input">
                                <p>Postcode/Zip <span>*</span></p>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="checkout__form__input">
                                <p>Phone <span>*</span></p>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="checkout__form__input">
                                <p>Email <span>*</span></p>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="cus-btn site-btn float-right">
                                Add
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </Modal>
    )
}