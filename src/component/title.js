import React from "react"
import "../auth.css"
 
const Titles = () => {
    return(
        <div className="weatherbackground">
        <span><img  className = "img"src ="https://image.flaticon.com/icons/svg/1200/1200430.svg"/>
        <img className = "img" src = "https://image.flaticon.com/icons/svg/136/136723.svg"/>
        <img className="img" src = "https://image.flaticon.com/icons/svg/414/414927.svg"/>
        <img className = "img" src = "https://image.flaticon.com/icons/svg/414/414974.svg"/>
        <img className="img" src="https://image.flaticon.com/icons/svg/740/740878.svg"/>
        <img className="img" src="https://image.flaticon.com/icons/svg/1146/1146869.svg"/>
        <img className="img" src="https://image.flaticon.com/icons/svg/861/861059.svg"/>
        </span>
            <h1> Weather Finder</h1>
            <p className="para">Find out weather, condition and more</p>
            </div>
    )
}

export default Titles