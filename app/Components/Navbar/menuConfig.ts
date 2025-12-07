export interface SubMenuItem {
  label: string;
  path: string;
}

export interface MenuItem {
  label: string;
  path?: string;
  submenu?: SubMenuItem[];
}

export const menuConfig: MenuItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  {
    label: "Academic",
    submenu: [
      { label: "Students", path: "/academic/students" },
      { label: "Teachers", path: "/academic/teachers" },
      { label: "Staff", path: "/academic/staff" },
    ],
  },
  { label: "Result", path: "/result" },
  { label: "Admission", path: "/admission" },
];
