import React, { useEffect, useState } from "react";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { Box } from "@mui/material";
import HomeView from "./views/pages/HomeView";
import SevicesDetail from "./components/Services/SevicesDetail";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Services from "./views/pages/Services";
import GearDetail from "./components/Gear/GearDetail";
import ProductComponent from "./components/Gear/ProductComponent";
import Cart from "./components/Cart/index";
import Infor from "./components/Profile/index";
import Login from "./views/auth/LoginView/index";
import { getUserInfoV2 } from "./services/index";

function App() {
  const [userInfo, setUserInfo] = useState({});
  const [count, setCount] = useState(0);
  useEffect(() => {
    async function getUserInfo() {
      const response = await getUserInfoV2();
      if (response.status === 200) {
        setUserInfo(response.data);
        setCount(count + 1);
      }
    }
    if (count === 0) {
      getUserInfo();
    }
  }, []);

  return (
    <BrowserRouter>
      <HeaderComponent userInfo={userInfo} />
      <Routes>
        {/* <Route path="/about">
        </Route>
        <Route path="/users">
        </Route> */}
        <Route path="/" element={<HomeView />} />
        <Route path="/services/" element={<Services />} />
        <Route path="/services/detail/" element={<SevicesDetail />} />
        <Route path="/gear/" element={<ProductComponent />} />
        <Route path="/gear/detail/" element={<GearDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Infor" element={<Infor />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Box>
        <FooterComponent />
      </Box>
    </BrowserRouter>
  );
}

export default App;
