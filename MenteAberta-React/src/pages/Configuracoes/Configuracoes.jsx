import React from 'react'
import Sidebar from '../../components/Header/Sidebar'

const Configuracoes = () => {
  return (
    <div className='d-flex'>
      <Sidebar />
      <main className='vw-100'>
        <section className='hero-section container'>
          <div className='d-flex justify-content-around'>
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
      </main>
    </div>
  )
}

export default Configuracoes