import * as React from "react";

import { Box, ChakraProvider, theme } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import BioData from "./components/pageSections/BioData";
import Fridge from "./components/fridge/Fridge";
// import Footer from "./components/pageSections/Footer";
import HomePage from "./components/landingPage/HomePage";
import Login from "./components/pageSections/Login";
import MealPlanner from "./components/meals/MealPlanner";
import { PrivateRoutes } from "./components/utils/PrivateRoutes";
import Recipes from "./components/recipes/Recipes";
import SignUp from "./components/pageSections/SignUp";
import Testimonials from "./components/landingPage/Testimonials";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box bgColor={"white"} color={"black"}>
      {" "}
      <Routes>
        <Route element={<PrivateRoutes />}></Route>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />}></Route>
        <Route path="testimonials" element={<Testimonials />}></Route>
        <Route path="meal-planner" element={<MealPlanner />}></Route>
        <Route path="biodata" element={<BioData />}></Route>
        <Route path="recipe" element={<Recipes />}></Route>
        <Route path="fridge" element={<Fridge />}></Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Box>
  </ChakraProvider>
);
