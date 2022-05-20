import { useState } from "react";
import SideBar from "./SideBar";
import MyAccountTabs from "./tabs";


export default function MyAccount() {

    const [active, setActive] = useState(0);

    return (
        <div className="container-fluid my-account pt-4">
            <div className="under-lg justify-content-center my-4 d-flex p-2 mt-2 border rounded shadow">
                <div>
                    <img src='/img/profile.svg' />
                </div>
                <div className="ml-2 mt-2 _bold">
                    <h6 className="">Hello,</h6>
                    <h6 className="_bold">Mohammed Shahul</h6>
                </div>
            </div>
            <div className="row  _my-ac-child ">
                <SideBar
                    active={active}
                    setActive={setActive}
                />
                <div className="col-sm-8 col-10 _my-ac-child p-2">
                    <MyAccountTabs active={active} />
                </div>
            </div>
        </div>
    )
}