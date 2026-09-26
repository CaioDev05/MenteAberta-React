import React from 'react'

const Conta = () => {
    return (
        <>
            <div className='content-box shadow-sm mb-4'>
                {/* Cabeçalho da Conta */}
                <div className='d-flex flex-column flex-md-row justify-content-between mb-3 gap-3'>
                    <div>
                        <h3 className='fw-bold'>Informações da Conta</h3>
                        <p className='text-p fs-5 mb-0'>Gerencie seu acesso e os dados vinculados à plataforma.</p>
                    </div>

                    <div className='d-flex align-items-start'>
                        <div className="d-inline-flex align-items-center mb-0 mb-md-3 card-lt-hero">
                            <span className="fw-semibold mb-0">Conta Ativa</span>
                        </div>
                    </div>
                </div>

                {/* Formulários */}
                <div className='row g-4'>
                    <div className='col-12 col-md-6'>
                        <label htmlFor="email-conta">Email de Acesso</label>
                        <input
                            type="text"
                            className="form-control form-control-custom w-100"
                            style={{ backgroundColor: '#FAF7F2' }}
                            id="email-conta"
                            placeholder='maria@exemplo.com'
                        />
                    </div>
                    <div className='col-12 col-md-6'>
                        <label htmlFor="telefone-conta">Telefone</label>
                        <input
                            type="text"
                            className="form-control form-control-custom w-100"
                            style={{ backgroundColor: '#FAF7F2' }}
                            id="telefone-conta"
                            placeholder='(11) 99999-9999'
                        />
                    </div>
                </div>
            </div>

            {/* Seção de Segurança */}
            <div className='content-box shadow-sm mb-4'>
                <h3 className='fw-bold'>Segurança</h3>
                <p className='text-p'>Recomendamos atualizar sua senha periodicamente.</p>
                
                <div className='d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 mt-4'>
                    <div>
                        <p className='fw-semibold m-0'>Senha</p>
                        <span className='text-p'>Última alteração há { } meses</span>
                    </div>
                    <button className='btn rounded-pill border bg-white px-4 flex-shrink-0'>
                        Alterar Senha
                    </button>
                </div>
            </div>
        </>
    )
}

export default Conta