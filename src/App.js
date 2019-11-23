import React from "react";
import { Card, CardMedia } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import axios from "axios";
import "./App.css";
import BCRButton from "./BCRButton";
import INGButton from "./INGButton";
import HSBCButton from "./HSBCButton";

class Subscription extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: false
    };
  }

  render() {
    const { app } = this.props;
    return (
      <div>
        <Card
          onClick={() => {
            this.props.toggleDetails({
              app
            });
          }}
          className="subscription"
          style={{
            backgroundColor: app.bg,
            color: app.color,
            "font-weight": "bold"
          }}
        >
          <CardMedia className="media" image={app.logo} title="Paella dish" />
          <span>Click to Configure</span>
        </Card>
      </div>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.details = this.details.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      detailsVisible: false,
      login: "",
      password: ""
    };
  }

  handleChange(evt) {
    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    this.setState({
      [evt.target.name]: value
    });
  }

  details() {
    return (
      <div className="details-super-wrapper">
        <PlayArrowIcon
          fontSize="large"
          className="pick-arrow"
          style={{ "margin-left": this.state.pickMargin }}
        />
        <div className="details-wrapper">
          <div className="inputs-wrapper">
            <h2>
              Your{" "}
              <span style={{ "backgorund-color": "#000" }}>
                {this.state.detailsFor}
              </span>{" "}
              Login Data
            </h2>
            <input
              type="text"
              placeholder="Login"
              name="login"
              onChange={this.handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={this.handleChange}
            />
            <button
              onClick={() => {
                axios.post("http://192.168.1.21:8080/subscriptions", {
                  provider: this.state.detailsFor,
                  username: this.state.login,
                  password: this.state.password
                });
                this.setState({
                  detailsVisible: false
                });
              }}
            >
              Save Login Data
            </button>
          </div>
          <div>
            <h2>Card details</h2>
            <input type="text" value="**** **** **** **** *219" disabled />
            <input type="text" value="12/20" disabled />
            <br />
            <h3>Openbanking (PSD2) login</h3>
            <BCRButton />
            <INGButton />
            <HSBCButton />
          </div>
        </div>
      </div>
    );
  }

  render() {
    const apps = [
      {
        name: "Netflix",
        bg: "#DC3730",
        pickMargin: "110px",
        color: "#fff",
        logo:
          "https://insidethemagic-119e2.kxcdn.com/wp-content/uploads/2018/08/netflix-800x400.png"
      },
      {
        name: "Spotify",
        pickMargin: "310px",
        bg: "#60D761",
        color: "#fff",
        logo:
          "https://www.youredm.com/wp-content/uploads/2016/12/spotify-green.png"
      },
      {
        name: "Audibles",
        pickMargin: "530px",
        color: "#000",
        logo:
          "https://d3iqwsql9z4qvn.cloudfront.net/wp-content/uploads/2017/05/26170219/audible-logo-white.png"
      },
      {
        name: "Uber Eats",
        logo:
          "https://upload.wikimedia.org/wikipedia/commons/2/23/Uber_eats_logo_2017_06_22.jpg",
        color: "#fff",
        pickMargin: "740px",
        bg: "#000"
      },
      {
        name: "YouTube Premium",
        color: "#000",
        pickMargin: "950px",
        logo:
          "https://androidblogger.eu/wp-content/uploads/YouTube-Premium-APK-600x400-1.jpg"
      }
    ];

    const { detailsVisible } = this.state;

    return (
      <div className="App">
        <h1>Subscriptions </h1>
        <div className="subscriptions-wrapper">
          {apps.map((app, idx) => (
            <Subscription
              app={app}
              key={idx}
              toggleDetails={args => {
                this.setState({
                  detailsVisible: !detailsVisible,
                  detailsFor: args.app.name,
                  pickMargin: args.app.pickMargin
                });
              }}
            />
          ))}
        </div>
        {detailsVisible ? this.details() : ""}
      </div>
    );
  }
}

export default App;
