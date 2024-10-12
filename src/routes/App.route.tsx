import { FunctionComponent } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/Home.layout";
import Shop from "../pages/Shop.page.tsx";
import Home from "../pages/Home.page";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ContactForm from "../pages/ContactUs";
import Aboutus from "../pages/AboutUs";
import PasswordResetRequestForm from "../components/Password/PasswordResetRequest.tsx";
import TwoFactorAuth from "../pages/TwoFactorAuth.page.tsx";
import ConfirmToChangePassword from "../components/Password/ConfirmToChangePassword.page.tsx";
import DisplayProduct from "../components/dashboard/Artist/DisplayProduct.tsx";
import DashboardLayout from "../components/dashboard/Artist/DashbordLayout.tsx";
import ArtistDashHome from "../components/dashboard/Artist/ArtistDashHome.tsx";
import AddProducts from "../components/dashboard/Product/addProducts.tsx";
import OrdersTable from "../components/dashboard/Table/OrdersTable.tsx";
const AppRoutes: FunctionComponent = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<HomeLayout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/about" element={<Aboutus />} />
            <Route
              path="/forgot-password"
              element={<PasswordResetRequestForm />}
            />
            <Route path="/two-factor-auth" element={<TwoFactorAuth />} />
            <Route
              path="/change-password"
              element={<ConfirmToChangePassword />}
            />
          </Route>
          <Route  element={<DashboardLayout />}>
          <Route index path="/dashboard" element={<ArtistDashHome />} />

          <Route path="/dashboard/product" element={<DisplayProduct />} />
          <Route path="/dashboard/product/add" element={<AddProducts />} />
          <Route path="/dashboard/orders/all" element={<OrdersTable />} />


          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
