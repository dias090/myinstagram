import React from "react";
import Logo from "../../assets/Logo.png"
import "./Loading.scss"

const Loading = () => {
    return (
        <div className="loading_container">
            <img src={Logo} alt="" />
        </div>
    )
}

export default Loading;