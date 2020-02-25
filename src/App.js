import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  state = {
    name: "",
    content: ""
  };
  componentDidMount() {
    const BASE_URL = "https://www.yjezimoc.com/test/helloworld?name=Yating";
    const getData = async () => {
      try {
        const res = await axios.post(BASE_URL);
        const data = res.data;
        console.log("res.data", data);
        this.setState({ name: data.content, content: data.title });
      } catch (e) {
        console.error(e);
      }
    };
    getData();

    console.log(this.state.data);
  } // get all the data from API and resign the value to state
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <p>{this.state.content}</p>
      </div>
    );
  }
}

export default App;
