import { lazy } from "react";

const routes = [
  {
    path: `/`,
    component: lazy((props) => import("../Pages/Home/Home")),
    exact: true,
  },
  {
    path: `/about`,
    component: lazy((props) => import("../Pages/AboutUs/About")),
    exact: true,
  },
  {
    path: `/employees-hub`,
    component: lazy((props) => import("../Pages/Services/Services")),
    exact: true,
  },

  {
    path: `/radio`,
    component: lazy((props) => import("../Pages/Radio/Radio")),
    exact: true,
  },
  {
    path: `/goodness`,
    component: lazy((props) => import("../Pages/Goodness/Goodness")),
    exact: true,
  },
  {
    path: `/goodness/mv-foundation`,
    component: lazy((props) => import("../Pages/Goodness/Mv-foundation")),
    exact: true,
  },
  {
    path: `/radioS01`,
    component: lazy((props) => import("../Pages/Radio/RadioS01.js")),
    exact: true,
  },
  {
    path: `/radioS02`,
    component: lazy((props) => import("../Pages/Radio/RadioS02.js")),
    exact: true,
  },
  {
    path: `/mentor`,
    component: lazy((props) => import("../Pages/Radio/Mentor")),
    exact: true,
  },
  {
    path: `/sa3aM3El3ela`,
    component: lazy((props) => import("../Pages/Radio/Sa3aM3El3ela")),
    exact: true,
  },

  {
    path: `/news`,
    component: lazy((props) => import("../Pages/News/News")),
    exact: true,
  },
  {
    path: `/news/:id`,
    component: lazy((props) => import("../Pages/News/Article")),
    exact: true,
  },

  {
    path: `/login`,
    component: lazy((props) => import("../Pages/Login/Login")),
    exact: true,
  },
  {
    path: `/my-profile`,
    component: lazy((props) => import("../Pages/MyProfile/MyProfile")),
    exact: true,
  },
  {
    path: `/learning-development`,
    component: lazy((props) =>
      import("../Pages/Learning-Development/LearningDevelopment")
    ),
    exact: true,
  },
  {
    path: `/policies`,
    component: lazy((props) => import("../Pages/Policies/Policies")),
    exact: true,
  },
  {
    path: `/hr-policies`,
    component: lazy((props) => import("../Pages/HRPolicies/HRPolicies")),
    exact: true,
  },
  {
    path: `/other-policies`,
    component: lazy((props) => import("../Pages/OtherPolicies/OtherPolicies")),
    exact: true,
  },
  {
    path: `/benefits`,
    component: lazy((props) => import("../Pages/Benefits/Benefits")),
    exact: true,
  },
  {
    path: `/requests`,
    component: lazy((props) => import("../Pages/Requests/Requests")),
    exact: true,
  },
  {
    path: `/attendance`,
    component: lazy((props) => import("../Pages/Attendance/Attendance")),
    exact: true,
  },
  {
    path: `/compensation`,
    component: lazy((props) => import("../Pages/Compensation/Compensation")),
    exact: true,
  },
  {
    path: `/forms`,
    component: lazy((props) => import("../Pages/Forms/Forms")),
    exact: true,
  },
  // {
  //   path: `/voice-record`,
  //   component: lazy((props) => import("../Pages/Voice-Recorder/VoiceRecorder")),
  //   exact: true,
  // },
  {
    component: lazy((props) => import("../Pages/Default")),
    exact: true,
  },
];

export default routes;
