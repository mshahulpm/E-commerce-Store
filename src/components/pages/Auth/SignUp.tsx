


export default function SignUp({ setSignUp }: any) {

    return (
        <>
            <div>
                <form className="_login mt-4">
                    <h4 className="font-weight-bold my-2 mb-4">Sign Up</h4>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Email address</label>
                        <input type="email" id="form2Example1" className="form-control" />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example2">Password</label>
                        <input type="password" id="form2Example2" className="form-control" />
                    </div>


                    {/* <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button> */}
                    <div className="d-flex justify-content-between">
                        <div className=""></div>
                        <button type="submit" className="site-btn ">Sign Up</button>

                    </div>
                    <div className="text-center mt-4">
                        <p>Already a member? <a className="text-primary font-weight-bold pointer ml-2" onClick={() => setSignUp(false)}>Login</a></p>
                    </div>
                </form>
            </div>

        </>
    )
}