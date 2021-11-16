import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
const First = () => {
    const navigate = useNavigate()
    const nav = () => {
        navigate("/register")
    }
    return (
        <div>
           <h1 onClick={nav} >register</h1>
        </div>
    )
}

export default First
