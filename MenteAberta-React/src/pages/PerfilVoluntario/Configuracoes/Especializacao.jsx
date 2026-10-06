import React from 'react'

const Especializacao = () => {
  return (
    <>
      <div className='content-box shadow-sm mb-4'>
        <h3 className='fw-bold'>Tipos de Especialização</h3>
        <p className='text-p fs-5'>Cadastre as áreas que ajudam pacientes a encontrar seu perfil.</p>

        {/* Formulário de Adição */}
        <div>
          <label htmlFor="nova-especializacao">Nova Especialização</label>
          <div className='d-flex flex-column flex-sm-row mt-3 gap-3'>
            <input
              type="text"
              className="form-control form-control-custom w-100"
              style={{ backgroundColor: '#FAF7F2' }}
              id="nova-especializacao"
              placeholder='Ex: Psicologia Infantil'
            />
            <button className='btn btn-success px-4 py-2 fw-semibold flex-shrink-0'>
              Adicionar
            </button>
          </div>
        </div>

        {/* Lista de Especializações */}
        <div className='mt-4'>
          <div className="content-box p-3 mb-3 rounded" style={{ backgroundColor: '#FAF7F2' }}>
            <div className='d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-2'>
              <span>Psicologia Clínica</span>
              <button className='btn fw-semibold p-0 px-sm-2 py-sm-1 text-start text-sm-center' style={{ color: '#3D5A4F' }}>
                Remover
              </button>
            </div>
          </div>
          
          <div className="content-box p-3 rounded" style={{ backgroundColor: '#FAF7F2' }}>
            <div className='d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-2'>
              <span>Terapia cognitivo-comportamental</span>
              <button className='btn fw-semibold p-0 px-sm-2 py-sm-1 text-start text-sm-center' style={{ color: '#3D5A4F' }}>
                Remover
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Especializacao