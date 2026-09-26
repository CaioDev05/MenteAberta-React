import React from 'react'

const Perfil = () => {
  return (
    <>
      <div className='content-box shadow-sm mb-4'>
        <h3>Perfil Profissional</h3>
        <p className='text-p fs-5'>Mantenha seus dados públicos atualizados.</p>
        
        {/* Seção da Foto de Perfil */}
        <div className='row g-4 mt-3'>
          <div className='col-12 col-lg-8'>
            <div className='row text-center text-md-start'>
              <div className='col-12 col-md-4 col-lg-3 mb-3 mb-md-0'>
                <img 
                  src="Voluntario/pro-photo.png" 
                  alt="" 
                  className="rounded-circle shadow-sm img-fluid" 
                  width="140" 
                />
              </div>
              <div className='col-12 col-md-8 col-lg-9 d-flex align-items-center justify-content-center justify-content-md-start p-0'>
                <div>
                  <p className='fw-semibold mb-1'>Foto de Perfil</p>
                  <p className='text-p mb-3'>JPG ou PNG. Tamanho máximo de 5 MB.</p>
                  <button className='btn rounded-pill border bg-white px-4 text-muted'>Alterar Foto</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seção dos Inputs */}
        <div className='row g-4 mt-3'>
          <div className='col-12 col-md-6'>
            <div className='mb-4'>
              <label htmlFor="nome-perfil">Nome</label>
              <input
                type="text"
                className="form-control form-control-custom w-100"
                style={{ backgroundColor: '#FAF7F2' }}
                id="nome-perfil"
                placeholder='Maria'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor="email-perfil">Email</label>
              <input
                type="text"
                className="form-control form-control-custom w-100"
                style={{ backgroundColor: '#FAF7F2' }}
                id="email-perfil"
                placeholder='maria@exemplo.com'
              />
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <div className='mb-4'>
              <label htmlFor="sobrenome-perfil">Sobrenome</label>
              <input
                type="text"
                className="form-control form-control-custom w-100"
                style={{ backgroundColor: '#FAF7F2' }}
                id="sobrenome-perfil"
                placeholder='Souza'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor="tipo-medico">Tipo de médico</label>
              <select 
                name="select-medico" 
                id="tipo-medico" 
                className="form-control form-control-custom w-100" 
                style={{backgroundColor: "rgb(250, 247, 242)"}}
              >
                <option value="1">Psicóloga Clínica</option>
                <option value="2">Psiquiatra</option>
                <option value="3">Terapeuta Ocupacional</option>
                <option value="4">Outra Opção</option>
              </select>
            </div>
          </div>
        </div>

        {/* Seção de Descrição */}
        <div className='row g-4'>
          <div className='col-12'>
            <div>
              <label htmlFor="descricao-perfil">Descrição</label>
              <textarea
                className="form-control form-control-custom w-100"
                style={{ backgroundColor: '#FAF7F2', minHeight: "150px"}}
                id="descricao-perfil"
                maxLength={500}
                placeholder='Atendimento acolhedor com foco em ansiedade, autocuidado e relações saudáveis.'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Perfil