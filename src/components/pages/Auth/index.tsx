import { useState } from "react"
import Login from "./Login"
import SignUp from "./SignUp"



export default function Auth() {

    const [signUp, setSignUp] = useState(false)

    return (
        <>
            {
                signUp ?
                    <SignUp setSignUp={setSignUp} /> :
                    <Login setSignUp={setSignUp} />
            }
        </>
    )
}