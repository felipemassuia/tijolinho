import './styles.css';
import "bootstrap/js/src/collapse.js"
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <nav className=" navbar navbar-expand-md navbar-dark menu-color">
        <div className="container-fluid nav-container">
          <Link to="/">
            <h4>TIJOLINHO IDEAL</h4>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#portfolio-navbar"
            aria-controls="portfolio-navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="portfolio-navbar">
            <ul className="navbar-nav offset-md-2 main-menu">
              <li>
                <NavLink to="/" activeClassName="active" exact>
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink to="/catalogo" activeClassName="active">CATÁLOGO</NavLink>
              </li>
              <li>
                <NavLink to="/orcamento" activeClassName="active">ORÇAMENTO</NavLink>
              </li>
              <li>
                <NavLink to="/sobre" activeClassName="active">SOBRE NÓS</NavLink>
              </li>
              <li>
                <NavLink to="/admin" activeClassName="active">ADMIN</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
