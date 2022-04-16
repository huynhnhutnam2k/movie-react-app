import React from "react";
import { Outlet } from "react-router";

function Content() {
  return (
    <>
      <Outlet></Outlet>
    </>
  );
}

export default Content;
