import { Link } from "react-router-dom";

export default function Layout() {
    return (
      <>
  <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand">Navbar</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link" >Books</Link>
          </li>
          <li className="nav-item">
            <Link to="/book/recyled" className="nav-link" >recyled Books</Link>
          </li>
          <li className="nav-item">
            <Link to="/book/firsthand" className="nav-link" >First Hand Books</Link>
          </li>
          <li className="nav-item">
            <Link to="/auth/login" className="nav-link" >Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/auth/logout" className="nav-link" >Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
      </>
    )
  }