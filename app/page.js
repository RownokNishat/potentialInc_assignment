import Header from "./components/Header";
import Services from "./components/Services";
import ContactMe from "./components/ContactMe";
import AboutMe from "./components/AboutMe";
import Banner from "./components/Banner";
import MyProjects from "./components/MyProjects";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="bg-[#FBFBFB] dark:bg-[#1E1E1E]">
      <div className="max-w-[1420px] p-8 lg:p-4 mx-auto ">
        <Header />
        <div id="home">
          <Banner />
        </div>
        <div id="about">
          <AboutMe />
        </div>
        <div id="projects">
          <MyProjects />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="contacts">
          <ContactMe />
        </div>
      </div>
      <Footer />
    </div>
  );
}
