import React from 'react'

const Especializacao = () => {
  return (
    <>
      <div className='content-box shadow-sm'>
        <h3 className='fw-bold'>Tipos de Especialização</h3>
        <p className='text-p fs-5'>Cadastre as áreas que ajudam pacientes a encontrar seu perfil.</p>

        <div>
          <label htmlFor="nova-especializacao">Nova Especialização</label>
          <div className='d-flex mt-3'>
            <input
              type="text"
              className="form-control form-control-custom w-100 me-3"
              style={{ backgroundColor: '#FAF7F2' }}
              id="nova-especializacao"
              placeholder='Ex: Psicologia Infantil'
            />
            <button className='btn btn-success px-4 py-2 py-md-auto fw-semibold'>Adicionar</button>
          </div>
        </div>

        <div className='mt-4'>
          <div className="content-box p-3 mb-3" style={{ backgroundColor: '#FAF7F2' }}>
            <div className='d-flex justify-content-between align-items-center'>
              <span>Psicologia Clínica</span>
              <button className='btn fw-semibold' style={{ color: '#3D5A4F' }}>Remover</button>
            </div>
          </div>
          <div className="content-box p-3" style={{ backgroundColor: '#FAF7F2' }}>
            <div className='d-flex justify-content-between align-items-center'>
              <span>Terapia cognitivo-comportamental</span>
              <button className='btn fw-semibold' style={{ color: '#3D5A4F' }}>Remover</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Especializacao