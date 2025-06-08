import { Link, NavLink } from "react-router";

const MainNavbar = () => {
  const navList = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About me</NavLink>
      </li>
      <li>
        <NavLink to={"/services"}>Services</NavLink>
      </li>
      <li>
        <NavLink to={"/shop"}>Shop</NavLink>
      </li>
      <li>
        <NavLink to={"/blog"}>Blog</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="desk-nav">
        <div className="container">
          <div className="flex items-center justify-between h-12">
            <Link className="font-bold text-ws-primary text-2xl" to={"/"}>
              WS
            </Link>
            <ul className="flex justify-center items-center">{navList}</ul>
            <div>User</div>
          </div>
        </div>
      </div>
      <div className="mbl-nav"></div>
    </>
  );
};

export default MainNavbar;
