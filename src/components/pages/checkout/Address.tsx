import Confirm from "@components/common/Confirm";
import { useState } from "react";
import AddressForm from "../my-account/tabs/Address/AddressForm";




export default function Address() {

    const [show, setCollapse] = useState(false);

    return (
        <>
            <div className="d-flex justify-content-between">
                <div>
                    <h5>select address</h5>
                </div>
                <div>
                    <button
                        onClick={() => setCollapse(!show)}
                        className="cus-btn bg-info text-light px-4 p-1">New</button>
                </div>
            </div>
            {/* ---------------------------------------------------------- */}

            <label htmlFor="addr_1" className="d-flex border p-2 rounded pointer">
                <div className=" mr-4 mt-2">
                    <input type="radio" id="addr_1" placeholder="Address 1" name='address' />
                </div>
                <div className="">
                    <h6 className="font-weight-bold">Mohammed Shahul P.M  - 87487000000000</h6>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci earum </span>
                </div>
            </label>

            <label htmlFor="addr_2" className="d-flex border p-2 rounded pointer">
                <div className=" mr-4 mt-2">
                    <input type="radio" id="addr_2" placeholder="Address 1" name='address' />
                </div>
                <div className="">
                    <h6 className="font-weight-bold">Mohammed Shahul P.M  - 87487000000000</h6>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci earum </span>
                </div>
            </label>

            {/* ------------------------------------------------------------ */}

            <AddressForm
                open={show}
                onClose={() => setCollapse(false)}
            />


        </>

    )
}