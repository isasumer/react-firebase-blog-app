import "./App.css";
import Navbar from "./components/Navbar";
import AutthContextProvider from "../context/AuthContextProvider";

function App() {
  return (
    <div className="App">
      <AutthContextProvider>
        <Navbar />
      </AutthContextProvider>
    </div>
  );
}
export default App;
