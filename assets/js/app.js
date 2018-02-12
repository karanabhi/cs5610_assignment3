import React from "react";
import {render} from "react-dom";
import {Board} from "./Board"
import {Score} from "./Score"
import {Click} from "./Click"
import {Reset} from "./Reset"


render(<Score/>,window.document.getElementById("scoreMainDiv"));
render(<Click/>,window.document.getElementById("clickMainDiv"));
render(<Reset/>,window.document.getElementById("resetBtnMainPara"));
render(<Board/>,window.document.getElementById("boardMainDiv"));


// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
//import "phoenix_html";

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"

//import run_demo from "./demo";
//import React from 'react';
//import Index from './index';

//function init() {
  //  let root = document.getElementById('game');
  //  run_demo(root);
  //}

  // Use jQuery to delay until page loaded.
  //$(init);
