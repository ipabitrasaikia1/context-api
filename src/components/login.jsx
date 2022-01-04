import { useState } from "react";

import { AuthContext } from "../contexts/authContext";
import { useContext } from "react";

export const Login = () => {

    const [form, setform] = useState({});
    const { user, handleLogin } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
        handleLogin(form)

    }

    const handleChange = (e) => {

        const { name, value } = e.target
        // console.log(e.target)
        // console.log(form)
        setform({
            ...form,
            [name]: value,

        })


    }
    return <form onSubmit={handleSubmit}>This is Login Form

        <input type="text" name="name" onChange={handleChange} placeholder="Enter Name" />
        <input type="email" name="email" onChange={handleChange} placeholder="enter email" />
        <input type="text" name="password" onChange={handleChange} />
        <button type="submit" > Log in</button>

    </form>
} 