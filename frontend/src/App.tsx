import { Box } from "@mui/material";
import Login from "./components/Login";
import NavBar from "./components/Navbar";

const App = () => {
  return (
    <Box>
      <NavBar logged={true}></NavBar>
      <Login></Login>
    </Box>
  );
};

export default App;
