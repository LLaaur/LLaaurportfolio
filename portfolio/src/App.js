import FrontPage from "./pages/frontpage/frontpage"
import { useState } from 'react';

import styles from "./index.css"


function App() {

    const [mode, setMode] = useState("light");

    const toggleModeHandler = () => {
      mode === "light" ? setMode("dark") : setMode("light")
    }

  return (
    <div className="App" mode={mode}>
      <FrontPage 
      toggleMode={toggleModeHandler}
      mode={mode}
      />
    </div>
  );
}

export default App;
