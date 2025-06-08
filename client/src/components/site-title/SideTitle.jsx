import { Helmet } from "react-helmet-async";

const SideTitle = ({ title, desc }) => {
  return (
    <Helmet>
      <title>
        {title} |{" "}
        {desc
          ? desc
          : "Full Stack MERN Developer | SaaS Architect & Consultant"}
      </title>
    </Helmet>
  );
};

export default SideTitle;
