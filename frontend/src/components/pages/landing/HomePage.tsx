import { Box } from "@chakra-ui/react";
import Footer from "../../pageSections/Footer";
import Hero from "./Hero";
import HomeNav from "../../navigation/HomeNav";
// import Login from "../../pageSections/Login";
// import SignUp from "../../pageSections/SignUp";
// import Testimonials from "./Testimonials";

export default function HomePage() {
  // const signInHandler = (value) => {
  //   value ? <Login /> : <Hero />;
  // };
  // const signUpHandler = () => {};
  return (
    <Box>
      <HomeNav />
      <Hero />
      <Footer />
    </Box>
  );
}
