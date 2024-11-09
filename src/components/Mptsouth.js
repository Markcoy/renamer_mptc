import React from "react";
import Cavitex from "./Cavitex";
import C5 from "./C5";
import Calax from "./Calax";
import Etc_south from "./Etc_south";
function Mptsouth() {
  return (
    <div>
      <Cavitex />
      <div className="mb-10">
        <C5 />
      </div>
      <div className="mb-10">
        <Calax />
      </div>
      <div className="mb-10">
        <Etc_south />
      </div>
    </div>
  );
}

export default Mptsouth;
