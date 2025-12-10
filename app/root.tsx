import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <div className="ml-auto mr-auto p-auto">
    <Navbar></Navbar>
<main className="ml-auto mr-auto  min-w-auto max-w-7xl">
  <Outlet />
</main>
<div>
  <Footer></Footer>
</div>

    </div>
  ;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const is404 = isRouteErrorResponse(error) && error.status === 404;

  const title = is404 ? "404 - Page Not Found" : "Something Went Wrong";
  const message = is404
    ? "The page you’re looking for doesn’t exist."
    : error instanceof Error
    ? error.message
    : "An unexpected error occurred.";

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-black text-white p-6">

      {/* Big Number */}
      <h1 className="text-9xl font-extrabold drop-shadow-xl text-purple-500">
        {is404 ? "404" : "Error"}
      </h1>

      {/* Title */}
      <h2 className="text-3xl font-bold mt-4 mb-2">{title}</h2>

      {/* Description */}
      <p className="text-gray-300 text-center max-w-lg mb-8">
        {message}
      </p>

      {/* Home Button */}
      <Link
        to="/"
        className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition text-lg font-semibold shadow-lg"
      >
        Go Back Home
      </Link>

      {/* Decorative Glow */}
      <div className="w-60 h-60 bg-purple-500 blur-3xl opacity-20 absolute -z-10"></div>
    </main>
  );
}
