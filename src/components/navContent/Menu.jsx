import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const menuArr = [
  { name: "Programs", to: "programs" },
  { name: "About Us", to: "about" },
  { name: "Campus", to: "campus" },
  { name: "Testimonials", to: "testimonials" },
];

const Menu = ({ mobile }) => {
  return (
    <ul className={mobile ? "flex flex-col gap-6" : "flex gap-10 items-center"}>

      <li>
        <RouterLink
          to="/"
          className="text-white font-medium hover:text-yellow-400 transition"
        >
          Home
        </RouterLink>
      </li>
      

      {menuArr.map((item) => (
        <li key={item.to} to='/'>
          <ScrollLink
            to={item.to}
            spy={true}
            smooth={true}
            offset={-90}
            duration={600}
            activeClass="text-yellow-400"
            className="cursor-pointer text-white font-medium hover:text-yellow-400 transition"
          >
            {item.name}
          </ScrollLink>
        </li>
      ))}

      {/* Courses opens a separate page */}
      <li>
        <RouterLink
          to="/courses"
          className="text-white font-medium hover:text-yellow-400 transition"
        >
          Courses
        </RouterLink>
      </li>

      <li>
        <RouterLink
          to="/contact"
          className="text-white font-medium hover:text-yellow-400 transition"
        >
          Contact
        </RouterLink>
      </li>
    </ul>
  );
};

export default Menu;