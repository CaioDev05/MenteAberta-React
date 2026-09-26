import React from 'react'

const Notificacoes = () => {
  return (
    <>
      <div className='content-box shadow-sm mb-4'>
        <h3 className='fw-bold'>Preferências de Notificação</h3>
        <p className='text-p fs-5'>Escolha como você quer receber novidades e lembretes.</p>
        
        <div className='mt-4'>
          {/* Item 1 */}
          <div className='d-flex justify-content-between align-items-center border-bottom gap-3'>
            <div className='my-3'>
              <p className='fw-semibold mb-1'>Lembretes de agenda</p>
              <p className='text-p mb-0'>Receba avisos antes das suas consultas e atividades.</p>
            </div>
            <input
              type="checkbox"
              className="form-check-input form-check-input-custom flex-shrink-0 m-0 me-2"
              id="lembretes-agenda"
            />
          </div>
          
          {/* Item 2 */}
          <div className='d-flex justify-content-between align-items-center border-bottom gap-3'>
            <div className='my-3'>
              <p className='fw-semibold mb-1'>Atualizações por email</p>
              <p className='text-p mb-0'>Novidades importantes sobre sua conta e a plataforma.</p>
            </div>
            <input
              type="checkbox"
              className="form-check-input form-check-input-custom flex-shrink-0 m-0 me-2"
              id="atualizacoes-email"
            />
          </div>
          
          {/* Item 3 */}
          <div className='d-flex justify-content-between align-items-center gap-3'>
            <div className='my-3'>
              <p className='fw-semibold mb-1'>Novos artigos</p>
              <p className='text-p mb-0'>Uma seleção cuidadosa de conteúdos sobre saúde mental.</p>
            </div>
            <input
              type="checkbox"
              className="form-check-input form-check-input-custom flex-shrink-0 m-0 me-2"
              id="novos-artigos"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Notificacoes