import { FaComments } from "react-icons/fa";
import { Link } from "react-router";
import Slider from "../../../components/Slider/Slider";
const HomePage = () => {
  return (
    <div>
      <div>
        <Slider />
      </div>
      <section id="about" className="bg-white py-20 px-6 text-gray-800">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-ws-primary">
            About Me
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            I'm{" "}
            <span className="font-semibold text-gray-900">Abul Wahed Nur</span>,
            a passionate{" "}
            <span className="text-primary">Full Stack MERN Developer</span> and
            <span className="text-primary"> Web App Consultant</span>. I help
            startups, small businesses, and creators build scalable SaaS
            platforms and modern web applications that solve real-world problems
            — from secure authentication to sleek UI/UX.
          </p>
          <p className="text-base text-gray-600">
            Let’s build something smart, fast, and impactful — together.
          </p>
          <div className="pt-4">
            <Link
              to="#contact"
              className="inline-flex items-center px-6 py-3 bg-primary bg-gray-800 hover:bg-ws-primary duration-300 text-white rounded-lg font-semibold transition"
            >
              <FaComments className="mr-2" />
              Let’s Discuss Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
