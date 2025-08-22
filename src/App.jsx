import { Routes, Route } from "react-router-dom";
import Landingpage from "./landingpage";
import Login from "./component/Login";
import Forgetpassword from "./component/forgetpassword";
import OtpVerification from "./component/otpverifaction"; // fixed name
import Signin from "./component/signin";
import Condo from "./dashboards/Condo";
import AssetsManagement from "./dashboards/condopages/assest";
import PricingPage from "./pricing";
import ResetPassword from "./component/resetpassword";
import FAQSection from "./contactus";
import About from "./component/about";
import ProjectManagementDashboard from "./dashboards/condopages/projectmanagment";




const App = () => {
  return (
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
    </Routes>
  );
};

export default App;
