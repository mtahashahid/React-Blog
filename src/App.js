import Navbar from "../src/Components/Navbar";
import Home from "../src/Components/Home";
import BlogDetails from "../src/Components/BlogDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Components/Create";
import NotFound from "./Components/NotFound";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
