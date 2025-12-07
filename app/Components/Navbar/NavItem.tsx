import { NavLink } from "react-router";
import { motion } from "framer-motion";

interface NavItemProps {
  label: string;
  path: string;
  onClick?: () => void;
}

const NavItem = ({ label, path, onClick }: NavItemProps) => {
  return (
    <motion.li
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className="cursor-pointer"
    >
      <NavLink
        to={path}
        onClick={onClick}
        className={({ isActive }) =>
          isActive
            ? "bg-green-500 text-white px-3 py-1 rounded font-semibold"
            : "px-3 py-1 font-semibold hover:text-green-600 transition"
        }
      >
        {label}
      </NavLink>
    </motion.li>
  );
};

export default NavItem;
