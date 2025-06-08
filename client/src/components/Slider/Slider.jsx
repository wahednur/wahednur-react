import { Link } from "react-router";
import bg from "/img/bg.jpg";

const Slider = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="aspect-mbl md:aspect-slider w-full bg-cover bg-center"
    >
      <div className="bg-[url('/img/wahednur.png')] bg-contain bg-right-bottom w-full bg-no-repeat h-full">
        <div className="w-full aspect-mbl md:aspect-slider flex flex-col justify-center items-center">
          <div className="text-white">
            <h1 className="text-3xl md:text-5xl lg:text-6xl uppercase text-shadow-2xl text-ws-primary">
              Abdul Wahed Nur
            </h1>
            <h2 className="text-lg lg:text-xl text-center text-ws-secondary my-2">
              Full Stack MERN Developer | SaaS Architect & Consultant
            </h2>
            <p className="text-base opacity-80 mt-2 text-center">
              From MVP to Enterprise — I build web apps that scale 🚀
            </p>
            <div className="grid grid-cols-2 gap-6 max-w-[300px] mx-auto mt-6 lg:mt-10">
              <Link to={"/about"} className="btn btn-slider ">
                About Me
              </Link>
              <Link to={"/portfolio"} className="btn btn-filled">
                Portfolio
              </Link>
              <Link to={"/contact"} className="btn btn-filled ">
                Let's Discuss
              </Link>
              <Link to={"/services"} className="btn btn-slider ">
                Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
