import { useState } from "react";
import './App.css';
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msz: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  let toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.background = "rgb(14 61 104)";
      showAlert("Dark mode has been enabled", "Success");
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("Light mode has been enabled", "Success");
    }
  };
  return (
    <div className="App">
      <>
        <Navbar
          title={"My Site"}
          about={"MY About"}
          mode={Mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <About />
        <div className="container my-3">
          <TextForm
            heading="Enter the text to analyze below"
            mode={Mode}
            showAlert={showAlert}
          />
        </div>
      </>
    </div>
  );
}

export default App;
