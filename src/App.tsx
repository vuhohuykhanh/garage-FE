import React from 'react';
import HomeView from './views/pages/HomeView';
import SevicesDetail from './components/Services/SevicesDetail';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Services from './views/pages/Services';
import GearDetail from './components/Gear/GearDetail';
import ProductComponent from './components/Gear/ProductComponent';
//import Cart from './components/Cart/index';
//import CartDetail from './components/Cart/CartDetail';
//import Infor from './components/Profile/index';
import Login from './views/auth/LoginView/index';
import Register from './views/auth/RegisterView/index';
import ProductManage from './views/pages/Admin/ProductManage';
//import ServiceManage from './views/pages/Admin/ServiceManage';
import { CustomerApp, AdminApp } from './customApp';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CustomerApp />}>
                    <Route path="/" element={<HomeView />} />
                    <Route path="/services/" element={<Services />} />
                    <Route
                        path="/services/detail/"
                        element={<SevicesDetail />}
                    />
                    <Route path="/gear/" element={<ProductComponent />} />
                    <Route path="/gear/detail/" element={<GearDetail />} />
                    {/*<Route path="/cart" element={<Cart />} />
                    <Route path="/Infor" element={<Infor />} />*/}
                    <Route path="/Login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    {/*<Route path="/cartDetail" element={<CartDetail />} />*/}
                </Route>
            </Routes>
            <Routes>
                <Route path="/admin/" element={<AdminApp />}>
                    <Route path="/admin/product" element={<ProductManage />} />
                    {/*<Route path="/admin/service" element={<ServiceManage />} />*/}
                    <Route path="/admin/revenue" element={<Login />} />
                    <Route path="/admin/employee" element={<Login />} />
                    <Route path="/admin/bill" element={<Login />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
