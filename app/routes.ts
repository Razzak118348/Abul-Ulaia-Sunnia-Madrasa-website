import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // Home
  index("pages/Home/home.tsx"),

  // About
  route("about", "pages/About/about.tsx"),
  route("about/missionVision", "pages/About/missionVision.tsx"),
  // Academic
  route('result', "pages/Academic/Result/result.tsx"),
  route("academic/examNotice", "pages/Academic/ExamNotice/examNotice.tsx"),
  route("academic/calendar", "pages/Academic/AcademicCalendar/calendar.tsx"),
  route("academic/classRutine", "pages/Academic/ClassRoutine/classRoutine.tsx"),
  route('academic/syllabusBooklist',"pages/Academic/SyllabusBooklist/syllabusBooklist.tsx"),
  route("academic/lessonPlan", "pages/Academic/LessonPlan/lessonPlan.tsx"),
  route("academic/academicRules","pages/Academic/AcademicRules/academicRules.tsx"),

  // Administration
route(
  "administration/governingBody",
  "pages/Administration/GoverningBody/governingBody.tsx"
),

route(
  "administration/messageChairman",
  "pages/Administration/MessageChairman/messageChairman.tsx"
),

route(
  "administration/messagePrincipal",
  "pages/Administration/MessagePrincipal/messagePrincipal.tsx"
),

// route(
//   "administration/aliahTeachers",
//   "pages/Administration/AliahTeachers/aliahTeachers.tsx"
// ),
route("administration/aliahTeachers","pages/Administration/AliahTeachers/aliahTeachers.tsx"),

route(
  "administration/hafiziaTeachers",
  "pages/Administration/HafiziaTeachers/hafiziaTeachers.tsx"
),

route(
  "administration/hostelIncharge",
  "pages/Administration/HostelIncharge/hostelIncharge.tsx"
),

route(
  "administration/staffMembers",
  "pages/Administration/StaffMembers/staffMembers.tsx"
),

] satisfies RouteConfig;
