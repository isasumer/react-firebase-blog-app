import { ToastContainer } from "react-toastify";
import "./App.css";
import AuthContextProvider from "./context/AuthContextProvider";
import { BlogContextProvider } from "./context/BlogContextProvider";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <BlogContextProvider>
          <AppRouter />
          <ToastContainer />
        </BlogContextProvider>
      </AuthContextProvider>
    </div>
  );
}
export default App;
