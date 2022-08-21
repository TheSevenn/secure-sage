import React from "react";

import "./assests/style.css";

// import ReactDom from "react-dom";
import {createRoot} from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App/>);