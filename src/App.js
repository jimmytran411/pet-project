/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import ReactDOM,{ render } from "react-dom";
import { Link, Router } from "@reach/router";
import Pet from "./Pet";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {
    const themeHook = useState("peru");
    return (
        <ThemeContext.Provider value={themeHook}>
          <div>
            <header>
                <Link to="/">Adopt Me!</Link>
            </header>
            <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
            </Router>
        </div>  
        </ThemeContext.Provider>
        
    );
}


ReactDOM.render(<App />, document.getElementById("root"));