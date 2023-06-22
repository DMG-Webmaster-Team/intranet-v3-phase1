import { lazy } from "react";

const routes = [
  {
    path: `${process.env.PUBLIC_URL}/`,
    component: lazy((props) => import("../Pages/Home/Home")),
    exact: true,
  },
  {
    path: `${process.env.PUBLIC_URL}/employees-hub`,
    component: lazy((props) => import("../Pages/Services/Services")),
    exact: true,
  },

  {
    path: `${process.env.PUBLIC_URL}/radio`,
    component: lazy((props) => import("../Pages/Radio/Radio")),
    exact: true,
  },
  {
    path: `${process.env.PUBLIC_URL}/radioS01`,
    component: lazy((props) => import("../Pages/Radio/RadioS01.js")),
    exact: true,
  },
  {
    path: `${process.env.PUBLIC_URL}/radioS02`,
    component: lazy((props) => import("../Pages/Radio/RadioS02.js")),
    exact: true,
  },
  {
    path: `${process.env.PUBLIC_URL}/sa3aM3El3ela`,
    component: lazy((props) => import("../Pages/Radio/Sa3aM3El3ela")),
    exact: true,
  },

  {
    path: `${process.env.PUBLIC_URL}/news`,
    component: lazy((props) => import("../Pages/News/News")),
    exact: true,
  },
  {
    path: `${process.env.PUBLIC_URL}/news/:id`,
    component: lazy((props) => import("../Pages/News/Article")),
    exact: true,
  },

  {
    path: `${process.env.PUBLIC_URL}/login`,
    component: lazy((props) => import("../Pages/Login/Login")),
    exact: true,
  },
  {
    path: `${process.env.PUBLIC_URL}/my-profile`,
    component: lazy((props) => import("../Pages/MyProfile/MyProfile")),
    exact: true,
  },
  {
    path: `${process.env.PUBLIC_URL}/learning-development`,
    component: lazy((props) =>
      import("../Pages/Learning-Development/LearningDevelopment")
    ),
    exact: true,
  },
  {
    path: `${process.env.PUBLIC_URL}/policies`,
    component: lazy((props) => import("../Pages/Policies/Policies")),
    exact: true,
  },
  {
    path: `${process.env.PUBLIC_URL}/hr-policies`,
    component: lazy((props) => import("../Pages/HRPolicies/HRPolicies")),
    exact: true,
  },
  {
    path: `${process.env.PUBLIC_URL}/other-policies`,
    component: lazy((props) => import("../Pages/OtherPolicies/OtherPolicies")),
    exact: true,
  },
  {
    path: `${process.env.PUBLIC_URL}/benefits`,
    component: lazy((props) => import("../Pages/Benefits/Benefits")),
    exact: true,
  },
  {
    path: `${process.env.PUBLIC_URL}/requests`,
    component: lazy((props) => import("../Pages/Requests/Requests")),
    exact: true,
  },
  {
    path: `${process.env.PUBLIC_URL}/attendance`,
    component: lazy((props) => import("../Pages/Attendance/Attendance")),
    exact: true,
  },
  {
    path: `${process.env.PUBLIC_URL}/compensation`,
    component: lazy((props) => import("../Pages/Compensation/Compensation")),
    exact: true,
  },
  {
    path: `${process.env.PUBLIC_URL}/forms`,
    component: lazy((props) => import("../Pages/Forms/Forms")),
    exact: true,
  },
  {
    component: lazy((props) => import("../Pages/Default")),
    exact: true,
  },
];

export default routes;
