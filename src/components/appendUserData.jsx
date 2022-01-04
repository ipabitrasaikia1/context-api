import { useContext } from "react";
import { AuthContext } from "../contexts/authContext"

import '../App.css'

export const LoginData = () => {

    const { user, handleLogin } = useContext(AuthContext);
    console.log("Userb token ", user.token)
    return <div >

        This is login data
        <table className="loginData">


            <tr>  <h2>Login Status : </h2> {user.token !== undefined ? "Success" : "Not Log in Yet"} </tr>

            <tr> <h2> User Token : </h2>   {user.token !== undefined ? user.token : "Not available"} </tr>
        </table>
    </div>
}