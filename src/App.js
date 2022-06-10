
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./pages/home/Home";
import LeaderBoard from "./pages/home/LeaderBoard";
import SignIn from "./pages/home/SignIn";
import SignUp from "./pages/home/SignUp";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/leaderBoard" element={<LeaderBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
