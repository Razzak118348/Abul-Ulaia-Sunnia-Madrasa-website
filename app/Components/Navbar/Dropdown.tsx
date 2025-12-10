import { motion, AnimatePresence } from "framer-motion";
import NavItem from "./NavItem";
import type { SubMenuItem } from "./menuConfig";
import "../../utils/color.css";

interface DropdownProps {
  label: string;
  submenu: SubMenuItem[];
  open: boolean;
  setOpen: (value: boolean) => void;
}

const Dropdown = ({ label, submenu, open, setOpen }: DropdownProps) => {
  return (
    <li
      className="relative cursor-pointer"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => setOpen(!open)} // mobile support
    >
      <button className="px-3 py-1 font-semibold flex items-center gap-2 ">
        {label} <span>{open ? "▲" : "▼"}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:absolute
    md:top-full
    md:left-0
    bgColor shadow-md rounded w-64 py-4 z-50
    md:w-64
    mt-2"
          >
            {submenu.map((item) => (
              <NavItem
                key={item.path}
                label={item.label}
                path={item.path}
                onClick={() => setOpen(false)} // close on click
              />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
};

export default Dropdown;
