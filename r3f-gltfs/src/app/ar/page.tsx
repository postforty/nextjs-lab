"use client";
import React from "react";
import CharacterViewer from "./CharacterViewer";

export default function Page() {
  const characterPath = "red_01.glb";

  return (
    <>
      <div>
        <CharacterViewer characterPath={characterPath} />
      </div>
      <div>
        <CharacterViewer characterPath={characterPath} />
      </div>
    </>
  );
}
