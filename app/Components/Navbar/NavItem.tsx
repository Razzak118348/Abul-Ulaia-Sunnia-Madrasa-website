import { NavLink } from "react-router";
import { motion } from "framer-motion";
import "../../utils/color.css";
interface NavItemProps {
  label: string;
  path: string;
  onClick?: () => void;
}

const NavItem = ({ label, path, onClick }: NavItemProps) => {
  return (
    //motion.li for hover effect.This is a animation wrapper from framer-motion
    <motion.li
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className="cursor-pointer py-1 lg:py-2"
    >
      <NavLink
        to={path}
        onClick={onClick}
        className={({ isActive }) =>
          isActive
            ? "buttonBgColor text-white px-3 py-1 rounded font-semibold"
            : "px-3 py-1 font-semibold hoverTextColor transition"
        }
      >
        {label}
      </NavLink>
    </motion.li>
  );
};

export default NavItem;
