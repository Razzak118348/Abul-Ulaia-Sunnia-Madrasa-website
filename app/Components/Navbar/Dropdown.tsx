import { motion, AnimatePresence } from "framer-motion";
import NavItem from "./NavItem";
import type { SubMenuItem } from "./menuConfig";

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
      <button className="px-3 py-1 font-semibold flex items-center gap-1">
        {label} <span>{open ? "▲" : "▼"}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 bg-white shadow-md rounded w-40 py-2 z-50"
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
