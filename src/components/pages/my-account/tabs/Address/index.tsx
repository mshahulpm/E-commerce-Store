import { useState } from "react";
import AddressForm from "./AddressForm";





export default function Address() {

    const [AddNewAddress, setAddNewAddress] = useState(false);

    return (
        <>
            <div className="p-4">
                <div className="d-flex">
                    <div className="flex-grow-1">
                        <h5 className="_bold mb-2">Your Addresses</h5>
                    </div>
                    <div>
                        <button
                            onClick={() => setAddNewAddress(true)}
                            className="cus-btn text-light bg-info p-2 px-4 border">Add New Address</button>
                    </div>
                </div>

                {
                    [1, 2, 3].map((item, index) => (
                        <div key={index}
                            style={{ position: 'relative' }} className="border rounded mt-3 pt-3 pl-3 ">
                            <h6 className="_bold">Mohammed shahul  , 83733773737</h6>
                            <p>street,post office (po),city,district,state,654544 pin </p>
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '10px',
                                    right: '20px',
                                }}
                                className="absolute">
                                <button className="cus-btn mr-2">
                                    <i className="fa fa-pencil-square-o text-info" aria-hidden="true"></i>
                                </button>
                                <button className="cus-btn">
                                    <i className="fa fa-trash text-danger" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    ))
                }

            </div>
            <AddressForm
                open={AddNewAddress}
                onClose={() => setAddNewAddress(false)}
            />
        </>
    )
}



