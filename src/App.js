import React, { useState } from "react";
// import ReactDOM from "react-dom";
import { Dropdown } from "react-bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
const head = ["Home", "Menu", "Prices"];

const inputSearch = document.querySelector("#search");

function hideShowSpin() {
  if (inputSearch !== "") {
    document.querySelector("#spin").classList.remove("disp");
  } else {
    document.querySelector("#spin").classList.add("disp");
  }
}

function HeadComponent() {
  const headerItems = head.map((item) => {
    return (
      <li>
        <a href="#"> {item} </a>
      </li>
    );
  });

  return (
    <nav className="p">
      <ul>
        {headerItems}

        <div id="spin" className="loader-container disp">
          <div className="loader"></div>
        </div>

        <input
          className="searchBar"
          id="search"
          type="text"
          placeholder="Search.."
          name="search"
          onChange={hideShowSpin}
        />
      </ul>
    </nav>
  );
}
function FooterComponent() {
  return (
    <footer>
      <ul>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <span className="searchBar">&#169; Copyright 2021 React</span>
      </ul>
    </footer>
  );
}

function MainComponent() {
  return <div>AAAAAAAAaaaaaaa empty</div>;
}

export default function App() {
  return (
    <div className="App">
      <div>
        <HeadComponent />
      </div>
      <MainComponent />
      <FooterComponent />
    </div>
  );
}

// timing(){
//   setInterval(() => {
//     this.setState({
//       stateName : new-state-value
//     })
//   }, time)
// }

//To Be Continued.... fatima please contact us if you wanna change anything
