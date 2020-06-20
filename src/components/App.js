import React from "react";
import "../stylesheet/App.css";
import Header from "./Header.js";
import Headernav from "./Headernav";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: null,
      language: "en",
    };
  }
  componentDidMount() {
    var { language } = this.state;
    let url = `https://newsapi.org/v2/sources?language=${language}&pageSize=10&apiKey=4f5ee2016a454b7da6ceacb1b2f21547`;
    fetch(url)
      .then((Response) => Response.json())
      .then((res) => {
        console.log(res.sources);
        this.setState({
          sources: res.sources,
        });
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <React.Suspense className="" fallback={<div>Loading...</div>}>
        <Header />
        <div className="headerNav container">
          <Headernav sources={this.state.sources} />
        </div>
      </React.Suspense>
    );
  }
}
