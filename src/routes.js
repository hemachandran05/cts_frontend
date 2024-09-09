import ReadmissionDashboard from "views/ReadmissionDashboard.jsx";
import PatientDetails from "views/PatientDetails/PatientDetails.jsx";
import Analytics from "views/Analytics.jsx";
import RiskFactors from "views/RiskFactors.jsx";
import Notifications from "views/Notifications.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/Tables.jsx";

var routes = [
  {
    path: "/readmission-dashboard",
    name: " Dashboard",
    icon: "nc-icon nc-bank",
    component: <ReadmissionDashboard />,
    layout: "/admin",
  },
  {
    path: "/patient-details",
    name: "Patient Details",
    icon: "nc-icon nc-single-02",
    component: <PatientDetails />,
    layout: "/admin",
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: "nc-icon nc-chart-bar-32",
    component: <Analytics />,
    layout: "/admin",
  },
  {
    path: "/risk-factors",
    name: "Risk Factors",
    icon: "nc-icon nc-alert-circle-i",
    component: <RiskFactors />,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: <Notifications />,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: <UserProfile />,
    layout: "/admin",
  },
  // {
  //   path: "/tables",
  //   name: "Table List",
  //   icon: "nc-icon nc-tile-56",
  //   component: <TableList />,
  //   layout: "/admin",
  // },
];
export default routes;
