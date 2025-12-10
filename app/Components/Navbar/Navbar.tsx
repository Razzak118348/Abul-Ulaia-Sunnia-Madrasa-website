import { Link } from "react-router";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import type { MenuItem } from "./menuConfig";
import { menuConfig } from "./menuConfig";
import NavItem from "./NavItem";
import Dropdown from "./Dropdown";
import "../../utils/color.css";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 bgColor shadow-md z-50 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/images/madrasa-icon.jpg" className="h-12 w-12 rounded-full" alt="Logo" />
            <Link to="/" className="text-xl font-bold">
              Abul Ulaia Sunnia Madrasa
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-4">
            {menuConfig.map((item: MenuItem, index: number) =>
              item.submenu ? (
                <Dropdown
                  key={item.label}
                  label={item.label}
                  submenu={item.submenu}
                  open={openDropdown === index}
                  setOpen={(status) => setOpenDropdown(status ? index : null)}
                />
              ) : (
                <NavItem key={item.label} label={item.label} path={item.path!} />
              )
            )}
          </ul>

          {/* Login + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="px-4 py-2 bg-green-500 text-white font-semibold rounded"
            >
              Login
            </Link>
            <button
              className="lg:hidden text-green-400 text-2xl"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="lg:hidden bg-blue-600 rounded shadow-md p-4 mt-2"
            >
              <ul className="flex flex-col gap-4">
                {menuConfig.map((item: MenuItem, index: number) =>
                  item.submenu ? (
                    <Dropdown
                      key={item.label}
                      label={item.label}
                      submenu={item.submenu}
                      open={openDropdown === index}
                      setOpen={(status) => setOpenDropdown(status ? index : null)}
                    />
                  ) : (
                    <NavItem
                      key={item.label}
                      label={item.label}
                      path={item.path!}
                      onClick={() => setMobileOpen(false)}
                    />
                  )
                )}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
