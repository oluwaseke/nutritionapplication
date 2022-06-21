import * as React from "react";

import { ChakraProvider, theme } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import EditProfile from "./components/pageSections/EditProfile";
import ForgotPassword from "./components/pageSections/ForgotPassword";
// import Footer from "./components/pageSections/Footer";
import HomePage from "./components/pages/landing/HomePage";
import Login from "./components/pageSections/Login";
import { PrivateRoutes } from "./components/utils/PrivateRoutes";
import ResetPassword from "./components/pageSections/ResetPassword";
import SignUp from "./components/pageSections/SignUp";
import Testimonials from "./components/pages/landing/Testimonials";
import UserDashboard from "./components/pages/dashboard/userDashboard";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="edit-profile" element={<EditProfile />}></Route>
      </Route>
      <Route path="/" element={<HomePage />} />
      <Route path="login" element={<Login />} />
      <Route path="sign-up" element={<SignUp />}></Route>
      <Route path="testimonials" element={<Testimonials />}></Route>
      <Route path="reset-password" element={<ResetPassword />}></Route>
      <Route path="forgot-password" element={<ForgotPassword />}></Route>
      <Route path="dashboard" element={<UserDashboard />}></Route>
      <Route></Route>
      <Route></Route>
      <Route></Route>
    </Routes>
  </ChakraProvider>
);
