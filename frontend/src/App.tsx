import Markdown from "./components/markdown/Markdown";
import { useState } from "react";
//import Del from "./components/markdown/Del";
function App() {
  const [toggleBg, setToggleBg] = useState<boolean>(true);
  return (
    <>
      <Markdown toggleBg={toggleBg} setToggleBg={setToggleBg} />
    </>
  );
}

export default App;
