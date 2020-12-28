/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM,{ render } from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
    return (
        <div>
            <h1 id="id">Adopt me!</h1>
            <Pet name="Luna" animal="Dog" breed="Havanese" />
            <SearchParams />
        </div>
    );
}


ReactDOM.render(<App />, document.getElementById("root"));