import { useState } from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const Home = () => {
  const [signOption, setSignOption] = useState(false);

  return <>{!signOption ? <SignIn setSignOption={setSignOption} /> : <SignUp setSignOption={setSignOption} />}</>;
};
export default Home;
