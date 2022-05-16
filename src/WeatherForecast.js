import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>{" "}
          <WeatherIcon code="01d" />{" "}
          <div className="WeatherForecast-temperatures">19 10</div>
        </div>
      </div>
    </div>
  );
}
