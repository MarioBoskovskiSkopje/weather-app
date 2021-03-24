import React, { Component } from "react";
import { connect } from "react-redux";
import { getWeatherByDay } from "../../actions";
import "./index.scss";

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollPosition: 0,
    };
  }

  componentDidMount() {
    document
      .getElementById("slider-wrapper")
      .addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = (e) => {
    let divScroll = this.div.scrollLeft;

    this.setState({
      scrollPosition:
        Math.floor(divScroll / 70) > 5 ? 5 : Math.floor(divScroll / 70),
    });
  };

  getDays = () => {
    const daysArr = [];
    const days = {
      0: "Sunday",
      1: "Monday",
      2: "Tuesday",
      3: "Wednesday",
      4: "Thursday",
      5: "Friday",
      6: "Saturday",
    };
    for (let i = 0; i <= 5; i++) {
      const element = i;
      const currentDate = new Date();
      const date = new Date();
      currentDate.setDate(date.getDate() + element);
      daysArr.push({ days: days[currentDate.getDay()], date: { currentDate } });
    }

    return daysArr;
  };

  _renderDays = (getWeatherByDay) => {
    const daysArr = this.getDays();

    return daysArr.map((day, index) => {
      if (index === this.state.scrollPosition) {
        getWeatherByDay(day.date.currentDate.toISOString().split("T")[0]);
      }
      return (
        <div
          className={`slider-wrapper__day ${
            index === this.state.scrollPosition ? "active" : 0
          }`}
          key={index}
          onClick={() =>
            this.setState(
              {
                scrollPosition: index,
              },
              () =>
                getWeatherByDay(
                  day.date.currentDate.toISOString().split("T")[0]
                )
            )
          }
        >
          {day.days}
        </div>
      );
    });
  };

  render() {
    return (
      <div
        className="slider-wrapper"
        id="slider-wrapper"
        ref={(div) => (this.div = div)}
      >
        {this._renderDays(this.props.getWeatherByDay)}
      </div>
    );
  }
}

export default connect(null, { getWeatherByDay })(Slider);
