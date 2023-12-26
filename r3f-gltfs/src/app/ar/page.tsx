"use client";
import { ChangeEvent, useEffect, useState } from "react";
import CharacterViewer from "./CharacterViewer";

export default function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const [info, setInfo] = useState({
  //   position: [0, 4, 0],
  //   scale: [2, 2, 2],
  // });

  // const { position, scale } = info;
  // const characterPath = "/characters/ex/charo_01.glb";
  const characterPath = "/charo_01.glb";
  return (
    <>
      <div>
        <CharacterViewer
          characterPath={characterPath}
          // scale={scale}
          // position={position}
        />
        <CharacterViewer
          characterPath={characterPath}
          // scale={scale}
          // position={position}
        />
      </div>
    </>
  );
}
