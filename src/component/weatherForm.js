import React from "react"
import "../auth.css"


 const WeatherForm = props => {
     return(
         <div className="weathform">
             <form  onSubmit={props.getWeather}>
             <div >
             <p ><input className="input" type="text" name="city" placeholder="City..."/></p>
             <p > <input className="input1" type="text"  name="country" placeholder="Country..."/></p>
             </div>
             <button className="button">Weather</button>
             </form>
         </div>
     )
 }

 export default WeatherForm; 