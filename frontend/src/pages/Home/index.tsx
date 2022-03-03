import AboutUs from "components/AboutUs";
import Innovation from "components/Innovation";
import Presentation from "components/Presentation";
import ProductPresentation from "components/ProductPresentation";
import Where from "components/Where";

function Home() {
    return (
      <>
      <Presentation></Presentation>
      <AboutUs></AboutUs>
      <ProductPresentation></ProductPresentation>
      <Innovation></Innovation>
      <Where></Where>
      </>    
    );
  }
  
  export default Home;