import { Routes, Route } from "react-router-dom";
import Landingpage from "./Landingpage";
import Login from "./component/Login";
import Forgetpassword from "./component/forgetpassword";
import OtpVerification from "./component/otpverifaction"; // fixed name
import Signin from "./component/signin";
import Condo from "./dashboards/condopages/Dashboard";
import AssetsManagement from "./dashboards/condopages/AssestManagment";
import PricingPage from "./component/Pricing";
import ResetPassword from "./component/resetpassword";

import About from "./component/About";
import ProjectManagementDashboard from "./dashboards/condopages/projectmanagment";
import Vendormanage from "./dashboards/condopages/vendormanagement";
import Report from "./dashboards/condopages/Report";
import Setting from "./dashboards/condopages/setting";
import NotificationsPage from "./dashboards/condopages/AllNotification";
import Messages from "./MESSAGE/Messages";
import ScrollToTop from "./component/arrowup";
import FAQSection from "./component/Contactus";
import DashboardActivityLog from "./dashboards/condopages/Viewdetails/Activitylog";
import RecentActivity from "./dashboards/condopages/DashboardComponents/RecentActivity";
import RecentRequest from "./dashboards/condopages/Viewdetails/RecentRequest";
const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgetpassword" element={<Forgetpassword />} />
      <Route path="/signin" element={<Signin/>} /> 
      <Route path="/Condo" element={<Condo/>}/>
      <Route path="/assets" element={<AssetsManagement/>}/>
      <Route path="/pricing" element={<PricingPage/>}/>
     <Route path="/reset" element={<ResetPassword/>}/>
     <Route path="/contactus" element={<FAQSection/>}/>
     <Route path="/About" element={<About/>} />
   <Route path="/projectmanagement" element={<ProjectManagementDashboard/>}/>
   <Route path="vendormanagement" element={<Vendormanage/>}/>
      <Route path="/report" element={<Report/>}/>
      <Route path="/setting" element={<Setting/>}/>
      <Route path="/all notification" element={<NotificationsPage/> }/>
      <Route path="/message" element={<Messages/>}/>
    <Route path="/Activity log" element={<DashboardActivityLog/>}/>
    <Route path="/Recent request" element={<RecentRequest/>}/>
  
    </Routes>

    <ScrollToTop/>
    </>
  );
};

export default App;