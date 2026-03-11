// Navbar komponens
import {  Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">MyApp</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            
            <li className="nav-item">
              <Link className="nav-link" to="/jatekok">Játékok</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/jatekTorles">Játékok törlése</Link>
            </li>
            
            <li className="nav-item dropdown">
              <button 
                className="nav-link dropdown-toggle btn btn-link"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                type="button"
              >
                Keresés
              </button>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/keresNev">Keresés név szerint</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/keresErtek">Keresés értékelés szerint</Link>
                </li>
              </ul>
              </li>
            

              <li className="nav-item">
                <Link className="nav-link" to="/jatekFelvitel">Játék felvitele</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/jatekModositas">Játékok módosítása</Link>
              </li>


          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar
