import "./assets/scss/App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RoutesComponent from "./routes/RoutesComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <main>
          <RoutesComponent />
        </main>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
