import React from "react";
import "./Home.css";
import { FaTwitter, FaArrowRight } from "react-icons/fa";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgcolor: "#C7CEEA",
      duration: "2s",
      quote: props.data.quotes[0].quote,
      author: props.data.quotes[0].author,
      current: 0,
      // eslint-disable-next-line
      link:
        "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
        '"' +
        props.data.quotes[0].quote +
        '"' +
        props.data.quotes[0].author,
    };
    this.handleClick = this.handleClick.bind(this);
    this.colors = [
      "#baffc9",
      "#bae1ff",
      "#6B5B95",
      "#88B04B",
      "#FFDAC1",
      "#E2F0CB",
      "#B5EAd7",
      "#C7CEEA",
      "#16a085",
      "#27ae60",
      "#2c3e50",
      "#f39c12",
      "#e74c3c",
      "#9b59b6",
      "#FB6964",
      "#342224",
      "#BDBB99",
      "#77B1A9",
      "#73A857",
    ];
  }

  handleClick(e) {
    var x = Math.floor(Math.random() * 102);
    while (x === this.current) {
      x = Math.floor(Math.random() * 102);
    }

    this.setState({
      bgcolor: this.colors[x % 17],
      duration: "2s",
      quote: this.props.data.quotes[x].quote,
      author: this.props.data.quotes[x].author,
      current: x,
      // eslint-disable-next-line
      link:
        "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
        '"' +
        this.props.data.quotes[x].quote +
        '" ' +
        this.props.data.quotes[x].author,
    });
  }

  render() {
    return (
      <div
        className="backa"
        style={{
          backgroundColor: this.state.bgcolor,
          transitionProperty: "background-color",
          transitionDuration: this.state.duration,
        }}
      >
        <div className="centered">
          <blockquote>"{this.state.quote}"</blockquote>
          <footer>
            <cite>-{this.state.author}</cite>
          </footer>
          <div className="buttons">
            <a href={this.state.link}>
              <FaTwitter className="twitter" />
            </a>
            <FaArrowRight
              className="arrow"
              onClick={(e) => this.handleClick(e)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
