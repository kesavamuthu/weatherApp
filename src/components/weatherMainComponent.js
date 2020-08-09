import React from "react";
import WeatherCard from "./card";
import SearchBar from "./searchBar";
import Axios from "axios";
import Config from "../config";

class WeatherMainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataMap: "", city: "" };
    this.dataFetcher = this.dataFetcher.bind(this);
    // this.dataMap = "";
    this.city = "";
  }

  componentDidMount() {
    this.dataFetcher();
  }

  dataFetcher(city = "Bengaluru") {
    let url = Config.url.replace("^", city);
    Axios.get(url).then((resp) => {
      //   console.log(resp.data);
      let map = new Map();
      resp.data.list.forEach((e, i) => {
        if (map.size < 5 && !map.has(e.dt_txt.split(" ")[0])) {
          map.set(e.dt_txt.split(" ")[0], e);
          console.log(e.dt_txt.split(" ")[0]);
        }
      });
      this.setState({
        dataMap: map,
        city: resp.data.city.name,
      });

      console.log(resp.data.list[0].main);
    });
  }
  render() {
    let dataKeys = Array.from(
      this.state.dataMap instanceof Map && this.state.dataMap.keys()
    );
    console.log("city is ", this.city);
    return (
      <>
        <SearchBar onSubmit={this.dataFetcher} />
        <br />
        <br />
        <br />
        {dataKeys &&
          dataKeys.map((e, i) => (
            <WeatherCard
              key={i}
              dateProps={e}
              valueProps={this.state.dataMap.get(e)}
              cityProps={this.state.city}
            />
          ))}
      </>
    );
  }
}

export default WeatherMainComponent;
