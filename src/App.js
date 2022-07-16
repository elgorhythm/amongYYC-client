
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/appBarMenus/About";
import Dashboard from "./components/component/Dashboard";
import Logout from "./components/component/Logout";
import Profile from "./components/component/Profile";
import Events from "./components/appBarMenus/Events"

import Home from "./pages/home/Home";

import SignIn from "./pages/home/SignIn";
import SignUp from "./pages/home/SignUp";
import Game from "./components/appBarMenus/Game";
import Sponsors from "./components/appBarMenus/Sponsors";
import Account from "./components/component/Account";
import UserProfile from "./pages/home/UserProfile";
import AllUsersList from "./pages/home/AllUsersList";
import Tasks from "./pages/home/Tasks";
import QrCode from './pages/home/QrCode';
import AddTasks from "./pages/home/AddTasks";
import AdminTasks from "./pages/home/AdminTasks";
<<<<<<< HEAD
import LeaderBoardPage from "./pages/home/LeaderBoardPage";
=======
import Imposter from "./pages/home/Imposter";


>>>>>>> 7b6ed4332cfbe8c62a235641b52bb13000170044

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Profile" element={<UserProfile />} />
        <Route path="/TaskManagement" element={<Tasks />} />
        <Route path="/AddTask" element={<AddTasks />} />
        <Route path="/TasksAdmin" element={<AdminTasks />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/UsersList" element={<AllUsersList />} />
        <Route path="/LeaderBoard" element={<LeaderBoardPage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path='/QrCodeGenerator' element={<QrCode />} />
        <Route path='About' element={<About/>}/>
        <Route path='Events' element={<Events/>}/>
        <Route path='Game' element={<Game/>}/>
        <Route path='Sponsors' element={<Sponsors/>}/>
        <Route path='Imposter' element={<Imposter/>}/>
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
