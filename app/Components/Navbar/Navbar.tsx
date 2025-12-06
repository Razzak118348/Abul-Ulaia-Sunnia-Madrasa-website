import { Link, NavLink } from "react-router";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import useTheme from "~/hooks/useTheme";

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [academicOpen, setAcademicOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-green-400 rounded px-3 py-1 font-semibold"
                            : "hover:bg-green-300 font-semibold px-3 py-1 rounded transition"
                    }
                    onClick={() => setMobileMenuOpen(false)}
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-green-400  rounded px-3 py-1 font-semibold"
                            : "hover:bg-green-300 font-semibold px-3 py-1 rounded transition"
                    }
                    onClick={() => setMobileMenuOpen(false)}
                >
                    About
                </NavLink>
            </li>

            {/* Academic Dropdown */}
            <li className="relative">
                <button
                    onClick={() => setAcademicOpen(!academicOpen)}
                    className="font-semibold flex hover:bg-green-300 items-center gap-1  w-full justify-between px-3 py-1 rounded transition"
                >
                    Academic
                    <span className="ml-1">{academicOpen ? "▲" : "▼"}</span>
                </button>
                {academicOpen && (
                    <ul className="absolute top-full left-0 bg-white shadow-md rounded-md w-40 mt-1 py-1 z-50">
                        <li>
                            <NavLink
                                to="/academic/students"
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-green-400  block px-4 py-2 rounded"
                                        : "hover:bg-green-300 block px-4 py-2 rounded transition"
                                }
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Students
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/academic/teachers"
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-green-400  block px-4 py-2 rounded"
                                        : "block px-4 py-2 hover:bg-green-300 rounded transition"
                                }
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Teachers
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/academic/staff"
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-green-400  block px-4 py-2 rounded"
                                        : "block px-4 py-2 hover:bg-green-300 rounded transition"
                                }
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Staff
                            </NavLink>
                        </li>
                    </ul>
                )}
            </li>

            <li>
                <NavLink
                    to="/result"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-green-400  rounded px-3 py-1 font-semibold"
                            : "hover:bg-green-300 font-semibold px-3 py-1 rounded transition"
                    }
                    onClick={() => setMobileMenuOpen(false)}
                >
                    Result
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/admission"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-green-400  rounded px-3 py-1 font-semibold"
                            : "hover:bg-green-300 font-semibold px-3 py-1 rounded transition"
                    }
                    onClick={() => setMobileMenuOpen(false)}
                >
                    Admission
                </NavLink>
            </li>

        </>
    );

    return (
        <nav className="sticky top-0 z-50 transition-all bg-gray-300">
            <div className="mx-auto px-2 md:px-auto max-w-7xl">
                <div className="flex justify-between items-center h-16">
                    <div className="flex text-center mt-auto mb-auto  items-center">
                        {/* logo */}
                        <img src="/images/icon.png" alt="Madrasa Logo" className="h-10 w-10  md:h-16 md:w-16" />
                        {/* Brand */}
                        <Link
                            to="/"
                            className="text-lg md:text-xl font-bold text-black "
                        >
                            Abul Ulaia Sunnia Madrasa
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex gap-6 items-center">{navItems}</ul>

                    {/* Right Side */}
                    <div className="flex items-center gap-4">
                        {/* Login */}
                        <Link
                            to="/login"
                            className="px-4 py-2 bg-green-400 hover:bg-green-600  font-medium rounded transition"
                        >
                            Login
                        </Link>

                        {/* {
            <button
              onClick={toggleTheme}
              className="p-2 bg-gray-200  rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              title="Toggle Theme"
            >
              {theme === "dark" ? (
                <FaSun className="text-yellow-400" />
              ) : (
                <FaMoon className="" />
              )}
            </button> } */}

                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden p-2 rounded  transition"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? (
                                <FaTimes className="text-green-400" />
                            ) : (
                                <FaBars className="text-green-400" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden mt-2 px-4 py-2 space-y-1 bg-white  rounded ">
                        <ul className="flex flex-col gap-4">{navItems}</ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
