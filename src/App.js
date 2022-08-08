import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { Box } from "@mui/material";
import HomeView from "./views/pages/HomeView";

import { Routes, BrowserRouter, Route } from "react-router-dom";
import Services from "./views/pages/Services";
function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        {/* <Route path="/about">
        </Route>
        <Route path="/users">
        </Route> */}
        <Route path="/" element={<HomeView />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Box>
        <FooterComponent />
      </Box>
    </BrowserRouter>
  );
}

export default App;
