import React from 'react'

const Notificacoes = () => {
  return (
    <>
      <div className='content-box shadow-sm'>
        <h3 className='fw-bold'>Preferências de Notificação</h3>
        <p className='text-p fs-5'>Escolha como você quer receber novidades e lembretes.</p>
        <div>
          <div className='d-flex justify-content-between align-items-center border-bottom'>
            <div className='my-3'>
              <p className='fw-semibold'>Lembretes de agenda</p>
              <p className='text-p'>Receba avisos antes das suas consultas e atividades.</p>
            </div>
            <input
              type="checkbox"
              className="form-check-input form-check-input-custom mt-1 me-2"
              id="termos"
            />
          </div>
          <div className='d-flex justify-content-between align-items-center border-bottom'>
            <div className='my-3'>
              <p className='fw-semibold'>Atualizações por email</p>
              <p className='text-p'>Novidades importantes sobre sua conta e a plataforma.</p>
            </div>
            <input
              type="checkbox"
              className="form-check-input form-check-input-custom mt-1 me-2"
              id="termos"
            />
          </div>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='my-3'>
              <p className='fw-semibold'>Novos artigos</p>
              <p className='text-p'>Uma seleção cuidadosa de conteúdos sobre saúde mental.</p>
            </div>
            <input
              type="checkbox"
              className="form-check-input form-check-input-custom mt-1 me-2"
              id="termos"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Notificacoes