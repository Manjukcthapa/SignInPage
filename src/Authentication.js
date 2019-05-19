import React, { Component } from "react"
import Titles from "./component/title"
import WeatherForm from "./component/weatherForm"
import Weather from "./component/weather"


const Api_Key = '4f2ab2d14bf3524b73005c44aa2a1403';
class Authentication extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }



  getWeather = async (e) => {
    e.preventDefault();
    const City = e.target.elements.city.value;
    const Country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${City},${Country}&appid=${Api_Key}&units=imperial `);

    const response = await api_call.json();

    console.log(response);

    this.setState({
      temperature: response.main.temp,
      city: response.name,
      country: response.sys.country,
      humidity: response.main.humidity,
      description: response.weather[0].description,
      error: ""
    })
  }


  render() {
    return (
      <div className="weather">
        <div className="form">
          <Titles />
        </div>
        <div className="aboutus">
          <WeatherForm getWeather={this.getWeather} />
          <Weather
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error} />
        </div>
      </div>
    )
  }
}

export default Authentication;