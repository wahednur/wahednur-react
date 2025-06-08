import { Link } from "react-router";
import img from "/404.svg";
const ErrorPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-800 text-white">
      <img src={img} className="max-w-lg" />
      <h1 className="heading">404</h1>
      <h4 className="title">Page not found</h4>
      <Link to={"/"} className="btn btn-filled mt-10">
        Back to home
      </Link>
    </div>
  );
};

export default ErrorPage;
