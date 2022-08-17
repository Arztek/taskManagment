import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar: React.FC<{ logged: boolean }> = ({ logged }) => {
  return (
    <AppBar position="static">
      <Toolbar color="dark">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: logged ? "flex" : "none" }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Tasks Management
        </Typography>
        <Button color="inherit" sx={{ display: logged ? "none" : "flex" }}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
