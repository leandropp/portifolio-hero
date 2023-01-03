import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Hero from "./Hero";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Hero,
});

export const { bootstrap, mount, unmount } = lifecycles;
