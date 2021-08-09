import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <div className="App">
        <Container>
          <Link to="/">
            <h1>Home page with search-bar for jobs</h1>
          </Link>
          <Route path="/" exact render={() => <Home />} />
        </Container>
      </div>
    </Router>
  );
}

export default App;
