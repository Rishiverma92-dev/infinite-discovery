import { useState } from "react";
import Landing from "./pages/Landing";
import ArchiveOne from "./pages/ArchiveOne";

export default function App() {

  const [screen,setScreen] =
useState("landing");

  return (
    <>
      {
        screen === "landing"
          ? <Landing setScreen={setScreen}/>
          : <ArchiveOne/>
      }
    </>
  );
}