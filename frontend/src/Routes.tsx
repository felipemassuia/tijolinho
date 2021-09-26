import Navbar from "components/Navbar";
import AboutUs from "pages/AboutUs";
import Admin from "pages/Admin";
import Budget from "pages/Budget";
import Catalog from "pages/Catalog";
import Home from "pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar>
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>
          <Route path="/catalogo">
            <Catalog></Catalog>
          </Route>
          <Route path="/orcamento">
            <Budget></Budget>
          </Route>
          <Route path="/sobre">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
