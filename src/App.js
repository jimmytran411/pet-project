/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM,{ render } from "react-dom";
import { Link, Router } from "@reach/router";
import Pet from "./Pet";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
    return (
        <div>
            <header>
                <Link to="/">Adopt Me!</Link>
            </header>
            <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
            </Router>
        </div>
    );
}


ReactDOM.render(<App />, document.getElementById("root"));