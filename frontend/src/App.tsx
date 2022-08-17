import Login from "./components/Login";
import NavBar from "./components/Navbar";
import "./App.css";

const App = () => {
  return (
    <div style={{ backgroundImage: 'url("/public/wave.svg")' }}>
      <NavBar logged={false}></NavBar>
      <Login></Login>
    </div>
  );
};

export default App;
