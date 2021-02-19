import "./App.css";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Track from "./components/Track";

import { MusicProvider } from "./context/MainContext";

function App() {
  return (
    <MusicProvider>
      <div className="app">
        <Nav />
        <Main />
      </div>
    </MusicProvider>
  );
}

export default App;
