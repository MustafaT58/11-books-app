import React, { useEffect, useState } from 'react'

export default function Login() {
    const [user, setUser] = useState({
        "id": 0,
        "name": "",
        "role": ""
    })
    const [loggedIn, setLoggedIn] = useState(false)
    const rtnuser = {
        "id": 58,
        "name": "mustafa@gmail.com",
        "role": "user"
    }

    useEffect(() => {
        if (rtnuser != null) {
            setUser(rtnuser)
            setLoggedIn(true)
            localStorage.setItem("user",JSON.stringify(rtnuser))
            localStorage.setItem("loggedIn",JSON.stringify(loggedIn))

        } else {
            console.log("rtnuser boş")
        }
    }, [loggedIn])
    return (
        <div>Login</div>
    )
}
