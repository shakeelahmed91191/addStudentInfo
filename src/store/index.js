import React from "react";
import { createStore } from "redux";
import allReducers from "../reducers/index";

export default createStore(allReducers);
