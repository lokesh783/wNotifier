import moment from "moment";
import React, { useEffect } from "react";

const Weathercard = ({
  temp,
  humidity,
  pressure,
  weathermood,
  name,
  speed,
  country,
  sunset,
  timezone,
  // date,
}) => {
  const [weatherState, setWeatheState] = React.useState("");
  // const de = ;

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatheState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatheState("wi-fog");
          break;
        case "Clear":
          setWeatheState("wi-day-sunny");
          break;
        case "Mist":
          setWeatheState("wi-dust");
          break;

        default:
          setWeatheState("wi-day-sunny");
          break;
      }
    }
  }, [weathermood]);

  // converting the seconds into time
  // let de = moment.js(timezone);
  // let time = de.getHours;
  var d = new Date();
  var utc_offset=d.getTimezoneOffset();
  // console.log(utc_offset);
  d.setMinutes(d.getMinutes()+utc_offset);

  console.log(d.getMinutes);
  var val=timezone/60;
  d.setMinutes(d.getMinutes()+val);
  const time=`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  const o_date=`${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;

  let sec = sunset;
  let date = new Date(sec * 1000);
  console.log(date.toString());
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>

        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>

          <div className="description">
            <div className="weatherCondition">{weathermood}</div>
            <div className="place">
              {name}, {country}
            </div>
          </div>
        </div>

        <div className="date">
        {time.toString()}<br/>
        {o_date.toString()}
        </div>
        {/* <div className="date">  </div> */}

        {/* our 4column section  */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {timeStr} PM <br />
                Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity} <br />
                Humidity
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure} <br />
                Pressure
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed} <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Weathercard;