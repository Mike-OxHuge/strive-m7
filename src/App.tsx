import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <div className="App">
        <Container>
          <Link to="/">
            <h1>Home page with search-bar for jobs</h1>
          </Link>
          <Link to="/favorite">
            <h2>your favorite jobs</h2>
          </Link>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/favorite" exact render={() => <Favorites />} />
        </Container>
      </div>
    </Router>
  );
}

export default App;
