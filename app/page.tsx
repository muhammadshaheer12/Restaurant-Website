import Slider from "./slider/page";
import About from "./about_us/page";
import Cover from "./cover/page";
import Our_Chefs from "./chefs/page";
import Testimonial from "./testimonial/page";
import Menu from "./menu/page";
import Contact from "./contact_us/page";

export default function Home() {
  return (
    <div>
    <Slider/>
    <About/>
    <Cover/>
    <Our_Chefs/>
    <Testimonial/>
    <Menu/>
    <Contact/>
    </div>
  );
}