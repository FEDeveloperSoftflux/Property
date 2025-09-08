import ScrollToTop from "./component/arrowup";
import SmartVendorConnections from "./component/Buttonhero"
import PropertyConnectFooter from "./component/Footer";
import Header from "./component/Header+home";

const Landingpage= () => {
  return ( 
 <>
    <Header/>
 <SmartVendorConnections/>
    <PropertyConnectFooter/>
    <ScrollToTop/>

    </>
  )
}

export default Landingpage;