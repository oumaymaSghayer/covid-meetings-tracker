import logo from "./logo.svg";
import "./App.css";
import TopBar from "./components/TopBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AddUser from "./components/AddUser";
import AddMeeting from "./components/AddMeeting";
import Meetings from "./components/Meetings";
function App() {
  return (
    <Router>
      <div className="App">
        <TopBar />
        <Switch>
          <Route path="/add_meeting">
            <AddMeeting />
          </Route>
          <Route path="/meetings">
            <Meetings />
          </Route>

          <Route path="/">
            <AddUser />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
