



export default function Personal() {

    return (
        <>
            <form action="#" className="checkout__form pr-2">
                <div className="row">
                    <div className="col-lg-7 shadow mb-2">
                        <h5 className="_bold mb-2">Personal Information</h5>
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
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <button className="cus-btn site-btn ml-auto float-right" >Save</button>
                            </div>
                        </div>
                        <h5 className="mt-2"></h5>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="checkout__form__input">
                                    <p>Email </p>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="checkout__form__input">
                                    <p>Phone No</p>
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="only-mobile p-4"></div>
                    <div className="col-lg-4 ml-2 shadow mb-2">
                        <h5 className="_bold mb-2">Change Password</h5>
                        <div className="row ">
                            <div className="col-lg-12">
                                <div className="checkout__form__input">
                                    <p>Old Password <span>*</span></p>
                                    <input type="text" />
                                </div>
                                <div className="checkout__form__input">
                                    <p>New Password <span>*</span></p>
                                    <input type="text" />
                                </div>
                                <div className="checkout__form__input">
                                    <p>Confirm Password <span>*</span></p>
                                    <input type="text" />
                                </div>
                                <button className="cus-btn site-btn ml-auto mb-2 float-right" >Save</button>
                            </div>

                        </div>
                    </div>
                </div>
            </form>


        </>
    )
}