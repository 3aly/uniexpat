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
    <div className="flex flex-col gap-y-6">
      <Home />
      <section className="flex flex-col gap-y-5" id="services">
        <FreeServices />
        <Services />
      </section>
      <section className="flex flex-col mb-8" id="about">
        <AboutOne />
        <AboutTwo />
      </section>
      <BlogsBrief />
      <ContactUs />
    </div>
  );
};

export default LandingPage;
