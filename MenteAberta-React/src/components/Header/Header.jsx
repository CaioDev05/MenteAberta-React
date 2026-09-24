import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className="border-bottom mb-4 py-3">
        <div className="container">
          <nav className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between">

            <div className="col-md-3 mb-2 mb-md-0 d-flex">
              <Link to="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none h4 mb-0"
                style={{ transition: 0.3 }}>
                <img src="logo-badge.png" alt="Logo" width="36" height="32" className="me-2"></img>
                <span className="fw-semibold">Mente Serena</span>
              </Link>
            </div>

            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <li><Link to="/" className="nav-link px-2 link-body-emphasis">Início</Link></li>
              <li><Link to="/voluntario"
                className="nav-link px-2 link-body-emphasis">Voluntários</Link></li>
              <li><Link to="/agendamento" className="nav-link px-2 link-body-emphasis">Agendamento</Link>
              </li>
              <li><Link to="/blog" className="nav-link px-2 link-body-emphasis">Blogs</Link></li>
              <li><Link to="/faq" className="nav-link px-2 link-body-emphasis">FAQ</Link></li>
              <li><Link to="/contato" className="nav-link px-2 link-body-emphasis">Contato</Link>
              </li>
            </ul>

            <div className="col-md-3 text-md-end text-center mt-3 mt-md-0">
              <Link to="/login" className="btn btn-success fw-semibold">Entrar / Cadastrar
                <span className="ms-1">
                  <i className="bi bi-arrow-right"></i>
                </span>
              </Link>
            </div>

          </nav>
        </div>
      </header>
    </>
  )
}

export default Header