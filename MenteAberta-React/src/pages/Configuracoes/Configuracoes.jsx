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
      <div className='d-flex flex-column flex-lg-row'>
        <Sidebar />

        <main className='vw-100 overflow-hidden'>
          <section className='hero-section container mt-4 mt-md-0'>
            <div className='d-flex flex-column flex-md-row justify-content-between gap-3'>
              <div>
                <div className="d-inline-flex align-items-center mb-3 card-lt-hero">
                  <span className="fw-semibold mb-0">Minha Conta</span>
                </div>
                <h1 className='display-5 fw-bold text-body-emphasis lh-1 mb-3 mb-md-4'>Configurações</h1>
                <span className='text-p lead'>Personalize suas informações e preferências.</span>
              </div>

              <div className='d-grid d-md-flex align-items-md-end'>
                <button className='btn btn-success px-4 py-2 py-md-auto fw-semibold'>Salvar Alterações</button>
              </div>
            </div>
          </section>

          <section className="container pb-4 mt-4 mt-md-0">
            <ul className="d-flex flex-nowrap overflow-auto p-0 m-0 pb-2 gap-2" style={{ WebkitOverflowScrolling: 'touch' }}>
              <li className={`btn-configuration flex-fill ${pagina === 1 ? "page-active" : "page-inactive"}`}>
                <button className="btn w-100 py-3 text-nowrap" onClick={() => { setPagina(1) }}>
                  <span className="me-2" style={{ color: "#3D5A4F" }}>01</span>
                  Conta
                </button>
              </li>

              <li className={`btn-configuration flex-fill ${pagina === 2 ? "page-active" : "page-inactive"}`}>
                <button className="btn w-100 py-3 text-nowrap" onClick={() => { setPagina(2) }}>
                  <span className="me-2" style={{ color: "#3D5A4F" }}>02</span>
                  Perfil
                </button>
              </li>

              <li className={`btn-configuration flex-fill ${pagina === 3 ? "page-active" : "page-inactive"}`}>
                <button className="btn w-100 py-3 text-nowrap" onClick={() => { setPagina(3) }}>
                  <span className="me-2" style={{ color: "#3D5A4F" }}>03</span>
                  Especializações
                </button>
              </li>

              <li className={`btn-configuration flex-fill ${pagina === 4 ? "page-active" : "page-inactive"}`}>
                <button className="btn w-100 py-3 text-nowrap" onClick={() => { setPagina(4) }}>
                  <span className="me-2" style={{ color: "#3D5A4F" }}>04</span>
                  Notificações
                </button>
              </li>
            </ul>
          </section>

          <section className="container p-0">
            {pagina === 1 && (<Conta />)}
            {pagina === 2 && (<Perfil />)}
            {pagina === 3 && (<Especializacao />)}
            {pagina === 4 && (<Notificacoes />)}
          </section>

          <section className="container px-0 py-4 mb-4">
            <div className='d-flex justify-content-between'>
              <button className='btn rounded-pill border bg-white px-4 text-muted' onClick={() => setPagina(pagina > 1 ? pagina - 1 : pagina)}>Anterior</button>
              <div className='d-flex align-items-center justify-content-center'>
                <span className='text-p m-0'>Etapa {pagina} de 4</span>
              </div>
              <button className='btn rounded-pill border bg-white px-4 text-muted' onClick={() => setPagina(pagina < 4 ? pagina + 1 : pagina)}>Próxima</button>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Configuracoes