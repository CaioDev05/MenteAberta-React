import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="bg-footer-custom pt-5 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4 pe-lg-5">
              <Link to="/" className="d-inline-flex align-items-center text-white text-decoration-none mb-3">
                <img src="logo-badge.png" alt="Logo" width="36" height="32" className="me-2"></img>
                  <span className="fs-4 fw-bold">Mente Serena</span>
              </Link>
              <p className="text-muted-custom mb-4" style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                Conectando corações acolhedores a mentes que buscam paz. Apoio psicológico voluntário, seguro,
                humanizado e totalmente gratuito.
              </p>

              <div className="emergency-card d-flex align-items-center p-3">
                <i className="bi bi-telephone-outbound emergency-icon me-3"></i>
                <div>
                  <div className="emergency-title text-uppercase fw-semibold mb-1">Canal de Emergência</div>
                  <div className="fw-bold fs-5 text-white">CVV - Ligue 188 (24 Horas)</div>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 mb-4">
              <h6 className="fw-bold mb-4">Plataforma</h6>
              <ul className="list-unstyled">
                <li className="mb-3"><Link to="/" className="footer-link">Encontre Ajuda</Link></li>
                <li className="mb-3"><Link to="/" className="footer-link">Seja Voluntário</Link></li>
                <li className="mb-3"><Link to="/" className="footer-link">Como Funciona</Link></li>
                <li className="mb-3"><Link to="/" className="footer-link">Código de Ética</Link></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-4 mb-4">
              <h6 className="fw-bold mb-4">Recursos</h6>
              <ul className="list-unstyled">
                <li className="mb-3"><Link to="/" className="footer-link">Artigos & Blog</Link></li>
                <li className="mb-3"><Link to="/" className="footer-link">Perguntas Frequentes</Link></li>
                <li className="mb-3"><Link to="/" className="footer-link">Imprensa</Link></li>
                <li className="mb-3"><Link to="/" className="footer-link">Fale Conosco</Link></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-4 mb-4">
              <h6 className="fw-bold mb-4">Acompanhe-nos</h6>
              <div className="d-flex mb-4">
                <Link to="/" className="social-btn rounded-circle me-3"><i className="bi bi-instagram"></i></Link>
                <Link to="/" className="social-btn rounded-circle me-3"><i className="bi bi-facebook"></i></Link>
                <Link to="/" className="social-btn rounded-circle me-3"><i className="bi bi-twitter"></i></Link>
                <Link to="/" className="social-btn rounded-circle"><i className="bi bi-linkedin"></i></Link>
              </div>
              <p className="text-muted-custom" style={{fontSize: "0.85rem", lineHeight: 1.5}}>
                Iniciativa social sem fins lucrativos em conformidade com as diretrizes do CFP brasileiro.
              </p>
            </div>
          </div>

          <div className="row border-top border-secondary pt-4 mt-2" style={{ borderColor: "#4a514d" }}>
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <p className="text-muted-custom mb-0" style={{fontSize: "0.9rem"}}>
                © 2026 Mente Aberta. Todos os direitos reservados.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <Link to="/" className="footer-link" style={{ fontSize: "0.9rem" }}>Política de Privacidade</Link>
              <span className="text-muted-custom mx-2">•</span>
              <Link to="/" className="footer-link" style={{ fontSize: "0.9rem" }}>Termos de Uso</Link>
              <span className="text-muted-custom mx-2">•</span>
              <Link to="/" className="footer-link" style={{ fontSize: "0.9rem" }}>Código do Paciente</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer