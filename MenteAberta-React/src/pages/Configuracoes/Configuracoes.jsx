import React, { useState } from 'react'
import Sidebar from '../../components/Header/Sidebar'
import Footer from '../../components/Footer/Footer'
import Conta from './Conta';
import Perfil from './Perfil';
import Especializacao from './Especializacao';
import Notificacoes from './Notificacoes';
import "./Configuracoes.css";

const Configuracoes = () => {

  const [pagina, setPagina] = useState(1); {/* 1 - Conta / 2 - Perfil / 3 - Especialização / 4 - Notificações */ }

  return (
    <>
      <div className='d-flex'>
        <Sidebar />
        <main className='vw-100'>
          <section className='hero-section container'>
            <div className='d-flex justify-content-between'>
              <div>
                <div className="d-inline-flex align-items-center mb-3 card-lt-hero">
                  <span className="fw-semibold mb-0">Minha Conta</span>
                </div>
                <h1 className='display-5 fw-bold text-body-emphasis lh-1 mb-4'>Configurações</h1>
                <span className='text-p lead'>Personalize suas informações e preferências.</span>
              </div>
              <div className='d-flex align-items-end'>
                <button className='btn btn-success px-4 fw-semibold'>Salvar Alterações</button>
              </div>
            </div>
          </section>

          <section className="hero-section container">
            <ul className="d-flex flex-nowrap overflow-auto p-0 m-0">
              <li className={`btn-configuration flex-fill ${pagina == 1 ? "page-active" : "page-inactive"}`}>
                <button className="btn w-100 py-3 text-nowrap" onClick={() => { setPagina(1) }}>
                  <span className="me-2" style={{ color: "#3D5A4F" }}>01</span>
                  Conta
                </button>
              </li>

              <li className={`btn-configuration flex-fill ${pagina == 2 ? "page-active" : "page-inactive"}`}>
                <button className="btn w-100 py-3 text-nowrap" onClick={() => { setPagina(2) }}>
                  <span className="me-2" style={{ color: "#3D5A4F" }}>02</span>
                  Perfil
                </button>
              </li>

              <li className={`btn-configuration flex-fill ${pagina == 3 ? "page-active" : "page-inactive"}`}>
                <button className="btn w-100 py-3 text-nowrap" onClick={() => { setPagina(3) }}>
                  <span className="me-2" style={{ color: "#3D5A4F" }}>03</span>
                  Especializações
                </button>
              </li>

              <li className={`btn-configuration flex-fill ${pagina == 4 ? "page-active" : "page-inactive"}`}>
                <button className="btn w-100 py-3 text-nowrap" onClick={() => { setPagina(4) }}>
                  <span className="me-2" style={{ color: "#3D5A4F" }}>04</span>
                  Notificações
                </button>
              </li>
            </ul>
          </section>

          <section className="hero-section container">
            {pagina == 1 && (<Conta />)}
            {pagina == 2 && (<Perfil />)}
            {pagina == 3 && (<Especializacao />)}
            {pagina == 4 && (<Notificacoes />)}
          </section>

          <section className="hero-section container">
            <div className='d-flex justify-content-between'>
              <button className='btn rounded-pill border bg-white px-4 text-muted'>Anterior</button>
              <p className='text-p lead'>Etapa {pagina} de 4</p>
              <button className='btn rounded-pill border bg-white px-4 text-muted'>Próxima</button>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Configuracoes