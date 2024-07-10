import React from "react";
import Stylesheet from "./Stylesheet/Stylesheet";
import Inline from "./inline/Inline";
import Modules from "./Modules/Modules";
import ScssHeader from "./ScssHeader/ScssHeader";
import Events from "./Events";
const App = () => {
  return (
    <div>
      <Events />
      {/* <Stylesheet title={"this is title"} content={"this is content"} />
      <Inline />
      <Modules />
      <ScssHeader /> */}
    </div>
  );
};

export default App;
