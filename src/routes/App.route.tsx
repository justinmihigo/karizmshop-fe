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
import ProductDetails from "../pages/ProductDetails.page.tsx";
import OrdersTable from "../components/dashboard/Table/OrdersTable.tsx";
import AddShopForm from "../components/dashboard/Artist/Shop/AddShopForm.tsx";
import MyShops from "../components/dashboard/Artist/Shop/Myshops.tsx";
import AddCategoryForm from "../components/dashboard/Artist/Category/AddCategoryForm.tsx";
import Profile from "../components/dashboard/Artist/Profile/Profile.tsx";
import PostBook from "../components/dashboard/Artist/Books/PostBook.tsx";
import AllBooks from "../components/dashboard/Artist/Books/AllBooks.tsx";
import AllCategories from "../components/dashboard/Artist/Category/AllCategory.tsx";
import AddMusicForm from "../components/dashboard/Artist/music/AddMusic.tsx";
import AllMusicTable from "../components/dashboard/Artist/music/AllMusic.tsx";
import AllProducts from "../components/dashboard/Product/AllProducts.tsx";
const AppRoutes: FunctionComponent = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<HomeLayout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/productDetails" element={<ProductDetails />} />
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
          <Route path="/dashboard/product/all" element={<AllProducts />} />

          <Route path="/dashboard/orders/all" element={<OrdersTable />} />
          <Route path="/dashboard/shop/add" element={<AddShopForm />} />
          <Route path="/dashboard/shop/all" element={<MyShops />} />
          <Route path="/dashboard/category/add" element={<AddCategoryForm />} />
          <Route path="/dashboard/category/all" element={<AllCategories />} />

          <Route path="/dashboard/user/profile" element={<Profile />} />
          <Route path="/dashboard/books/add" element={<PostBook />} />
          <Route path="/dashboard/books/all" element={<AllBooks />} />
          <Route path="/dashboard/music/create" element={<AddMusicForm />} />
          <Route path="/dashboard/music/all" element={<AllMusicTable />} />


          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
