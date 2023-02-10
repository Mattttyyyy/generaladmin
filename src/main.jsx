/**
=========================================================
* General Admin  - v1.0.0
=========================================================
* Product Page: https://github.com/Mattttyyyy/generaladmin
* Copyright 2023 Matthew Blasco (https://github.com/Mattttyyyy/)
* Licensed under MIT (https://github.com/Mattttyyyy/generaladmin/blob/main/LICENSE.md)
* Coded by Matthew Blasco
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import { MaterialTailwindControllerProvider } from "@/context";
import "../public/css/tailwind.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <MaterialTailwindControllerProvider>
          <App />
        </MaterialTailwindControllerProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
