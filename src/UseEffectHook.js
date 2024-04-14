/** @format */

import React from "react";
import { useEffect } from "react";

export default function UseEffectHook() {
  useEffect(() => {
    console.log("inside use effect");
  });

  return <h1>UseEffectHook</h1>;
}
