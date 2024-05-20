import {
  FreeServices,
  Home,
  AboutOne,
  AboutTwo,
  BlogsBrief,
  ContactUs,
} from "@components/organisms";
import Services from "../Services/Services";
const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-12">
      <Home />
      <section className="flex flex-col gap-5" id="services">
        <FreeServices />
        <Services />
      </section>
      <section className="flex gap-5 flex-col " id="about">
        <AboutOne />
        <AboutTwo />
      </section>
      <BlogsBrief />
      <ContactUs />
    </div>
  );
};

export default LandingPage;
