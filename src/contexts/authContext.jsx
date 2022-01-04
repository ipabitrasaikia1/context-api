import { createContext } from "react"
import { useState } from "react";

export const AuthContext = createContext();// type


export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState({});

    const handleLogin = (loginData) => {

        // setUser(loginData);
        console.log("Data Login ::", loginData)

        let check = {
            email: loginData.email,
            password: loginData.password

        }
        console.log("chek ::", check)

        fetch("https://reqres.in/api/login", {
            method: "POST",
            body: JSON.stringify(check),
            headers: {
                "content-type": "application/json",
            }
        }).then((d) => d.json()).then((res) => res).then((res) => {

            console.log(res)
            if (res.error) {
                console.log(res.error)
                alert(`${res.error}`)
            }
            else {
                setUser(res)
            }

        }


        )


    }

    return <AuthContext.Provider value={{ user, handleLogin }}> {children} </AuthContext.Provider>

} 