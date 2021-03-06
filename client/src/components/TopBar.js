import "./../App.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import { useSelector } from "react-redux";
function TopBar() {
  const myCart = useSelector((state) => state.order);
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar className="tool-bar">
          <Typography variant="h6">Tracker App</Typography>
          <div className="tool-bar-actions">
            <Button color="inherit">
              <Link to="/" className="nav-link">
                Add User
              </Link>
            </Button>
            <Button color="inherit">
              <Link to="/add_meeting" className="nav-link">
                Add meeting
              </Link>
            </Button>

            <Button color="inherit">
              <Link to="/meetings" className="nav-link">
                Meetings
              </Link>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TopBar;
