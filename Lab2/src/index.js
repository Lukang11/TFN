//./componensts/index.js
import React from "react";
import { createRoot, render } from "react-dom";
import data from "data/Info.json";
import Website from "Website";

const root = createRoot(document.getElementById("root"))
root.render(<Website data={data}/>)