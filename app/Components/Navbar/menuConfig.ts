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
  { label: "About",
    submenu: [
      { label: "About Us", path: "/about" },
      { label: "Mission & Vision", path: "/about/mission-vision" }
    ],
  },
 {
  label: "Academic",
  submenu: [
    {label: "Result", path: "/result"},
    { label: "Academic Calendar", path: "/academic/calendar" },
    { label: "Class Routine", path: "/academic/class-routine" },
    { label: "Lesson Plan", path: "/academic/lesson-plan" },
    { label: "Syllabus And Booklist", path: "/academic/syllabus-booklist" },
    { label: "Academic Rules", path: "/academic/academic-rules" },
    { label: "Notice of Examination", path: "/academic/exam-notice" },
    { label: "Exam Results", path: "/academic/public-exam-results" },
  ],
},
{ label: "Administration",
  submenu: [
    { label: "Governing Body", path: "/administration/governing-body" },
    { label: "Message of Chairman", path: "/administration/message-of-chairman" },
    { label: "Management Principal", path: "/administration/message-of-principal" },
    { label:"Aliah Teachers", path:"/administration/aliah-teachers" },
    { label:"Hafizia Teachers", path:"/administration/hafizia-teachers" },
    { label:"Hostel Incharge", path:"/administration/hostel-incharge" },
    { label: "Staff Members", path: "/administration/staff-members" },
  ],
},
{
  label: "Updates",
  submenu: [
    { label: "News & Events", path: "/media/news-events" },
    { label: "Gallery", path: "/media/gallery" },
  ],
},

  { label: "Admission", path: "/admission" },

  { label: "Contact", path: "/contact" },

];
