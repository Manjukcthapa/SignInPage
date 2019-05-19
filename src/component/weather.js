import React from "react"
import "../auth.css"


const Weather = props => {
    return(
        <div className="description">
            {props.country && props.city && <p> Temperature: {props.temperature}</p>}
            { props.country && props.city && <p>City: {props.city}</p>}
            { props.country && props.city && <p>Country: {props.country}</p>}
            { props.country && props.city && <p>Humidity: {props.humidity}</p>}
           { props.country && props.city && <p>Condition: {props.description}</p>}
        </div>
    )
}

export default Weather;