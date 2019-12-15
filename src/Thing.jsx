import React from "react";
import { foo, blar, zip } from "./foo.module.css";

export default function Thing() {
  return (
    <div className={`${foo} ${zip}`}>
      <p>The secret is: {process.env.SECRET}</p>
      <p className={blar}>I use CSS modules</p>
    </div>
  );
}
