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
  {
    label: "About",
    submenu: [
      { label: "About Us", path: "/about" },
      { label: "Mission & Vision", path: "about/missionVision" }
    ],
  },

  {
    label: "Academic",
    submenu: [
      { label: "Result", path: "/result" },
      { label: "Exam Notice", path: "/academic/examNotice" },
      { label: "Academic Calendar", path: "/academic/calendar" },
      { label: "Class Routine", path: "/academic/classRutine" },
      {label:"Syllabus & Booklist", path:"/academic/syllabusBooklist"},
      { label: "Lesson Plan", path: "/academic/lessonPlan" },
      { label: "Academic Rules", path: "/academic/academicRules" },

    ],
  },
  {
    label: "Administration",
    submenu: [
      { label: "Governing Body", path: "/administration/governingBody" },
      { label: "Message of Chairman", path: "/administration/messageChairman" },
      { label: "Management Principal", path: "/administration/messagePrincipal" },
      { label: "Aliah Teachers", path: "/administration/aliahTeachers" },
      { label: "Hafizia Teachers", path: "/administration/hafiziaTeachers" },
      { label: "Hostel Incharge", path: "/administration/hostelIncharge" },
      { label: "Staff Members", path: "/administration/staffMembers" },
    ],
  },
  {
    label: "Updates",
    submenu: [
      { label: "News & Events", path: "/updates/newsAndEvents" },
      { label: "Gallery", path: "/updates/gallery" },
    ],
  },

  { label: "Admission", path: "/admission" },

  { label: "Contact", path: "/contact" },

];
