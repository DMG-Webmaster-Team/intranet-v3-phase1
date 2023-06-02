import { lazy } from "react";

const routes = [
  {
    path: "/",
    component: lazy((props) => import("../Pages/Home/Home")),
    exact: true,
  },
  {
    path: "/employees-hub",
    component: lazy((props) => import("../Pages/Services/Services")),
    exact: true,
  },
  {
    path: "/application",
    component: lazy((props) => import("../Pages/Applications/Applications")),
    exact: true,
  },
  // {
  //   path: "/announcements",
  //   component: lazy((props) => import("../Pages/Announcements/Announcements")),
  //   exact: true,
  // },
  {
    path: "/jobs",
    component: lazy((props) => import("../Pages/Jobs/Jobs")),
    exact: true,
  },
  {
    path: "/templates",
    component: lazy((props) => import("../Pages/Templates/Templates")),
    exact: true,
  },
  {
    path: "/documents",
    component: lazy((props) => import("../Pages/Documents/documents")),
    exact: true,
  },

  {
    path: "/news",
    component: lazy((props) => import("../Pages/News/News")),
    exact: true,
  },
  {
    path: "/news/:id",
    component: lazy((props) => import("../Pages/News/Article")),
    exact: true,
  },

  {
    path: "/login",
    component: lazy((props) => import("../Pages/Login/Login")),
    exact: true,
  },
  {
    path: "/my-profile",
    component: lazy((props) => import("../Pages/MyProfile/MyProfile")),
    exact: true,
  },
  {
    path: "/learning-development",
    component: lazy((props) =>
      import("../Pages/Learning-Development/LearningDevelopment")
    ),
    exact: true,
  },
  {
    path: "/policies",
    component: lazy((props) => import("../Pages/Policies/Policies")),
    exact: true,
  },
  {
    path: "/hr-policies",
    component: lazy((props) => import("../Pages/HRPolicies/HRPolicies")),
    exact: true,
  },
  // {
  //   path: "/other-policies",
  //   component: lazy((props) => import("../Pages/HRPolicies/HRPolicies")),
  //   exact: true,
  // },
  {
    path: "/other-policies",
    component: lazy((props) => import("../Pages/OtherPolicies/OtherPolicies")),
    exact: true,
  },
  {
    path: "/benefits",
    component: lazy((props) => import("../Pages/Benefits/Benefits")),
    exact: true,
  },
  {
    path: "/requests",
    component: lazy((props) => import("../Pages/Requests/Requests")),
    exact: true,
  },
  {
    path: "/attendance",
    component: lazy((props) => import("../Pages/Attendance/Attendance")),
    exact: true,
  },
  {
    path: "/compensation",
    component: lazy((props) => import("../Pages/Compensation/Compensation")),
    exact: true,
  },
  {
    path: "/forms",
    component: lazy((props) => import("../Pages/Forms/Forms")),
    exact: true,
  },
  {
    component: lazy((props) => import("../Pages/Default")),
    exact: true,
  },
];

export default routes;