import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Abul Ulaia Sunnia Madrasa" },
    { name: "description", content: "Abul Ulaia Sunnia Madrasa" },
  ];
}

export default function Home() {
  return <div>
hi this is home page
  </div>;
}
