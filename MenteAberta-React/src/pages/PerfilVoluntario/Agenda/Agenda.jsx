import React, { useState } from 'react';

const Agenda = () => {
  const [dropdownAberto, setDropdownAberto] = useState(false);
  const [opcaoSelecionada, setOpcaoSelecionada] = useState("Todas as agendas");

  const handleSelecionar = (opcao) => {
    setOpcaoSelecionada(opcao);
    setDropdownAberto(false);
  };

  return (
    <>
      <section className='hero-section container mt-md-0'>
        <div className='d-flex flex-column flex-md-row justify-content-between gap-3 mb-4'>
          <div>
            <div className="d-inline-flex align-items-center mb-3 card-lt-hero">
              <span className="fw-semibold mb-0">Organização do Voluntário</span>
            </div>
            <h1 className='display-5 fw-bold text-body-emphasis lh-1 mb-3 mb-md-4'>Agenda</h1>
            <span className='text-p lead'>Acompanhe seus atendimentos, atividades e horários disponíveis.</span>
          </div>

          <div className='d-grid d-md-flex justify-content-md-end align-items-md-center'>
            <button className='btn btn-success rounded-pill px-4 py-2 fw-semibold d-flex align-items-center justify-content-center gap-2 flex-shrink-0'>
              <i className="bi bi-plus-lg fs-5"></i>
              Novo Compromisso
            </button>
          </div>
        </div>

        <div className="row g-3 align-items-center">
          {/* Busca */}
          <div className="col-12 col-md">
            <div className="input-group p-2 border rounded-pill bg-white shadow-sm">
              <div className="d-flex align-items-center ms-1">
                <i className="bi bi-search text-secondary"></i>
              </div>
              <input
                type="text"
                className="form-control border-0 bg-transparent ps-3 my-auto shadow-none"
                placeholder="Buscar evento ou paciente..."
                aria-label="Buscar"
              />
            </div>
          </div>

          {/* Dropdown Customizado */}
          <div className="col-12 col-md-auto position-relative">
            <button
              className="btn bg-white border rounded-pill px-4 fw-semibold shadow-sm d-flex justify-content-between align-items-center w-100 text-dark"
              type="button"
              onClick={() => setDropdownAberto(!dropdownAberto)}
              style={{ minWidth: "180px", height: "46px" }}
            >
              {opcaoSelecionada}
              <i className="bi bi-chevron-down ms-2 fs-6"></i>
            </button>

            <ul
              className={`dropdown-menu w-100 shadow border-0 mt-2 p-2 rounded-4 ${dropdownAberto ? 'show d-block' : ''}`}
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                zIndex: 1050,
                '--bs-dropdown-link-active-bg': '#3d5a4f' // Sobrescreve o azul padrão do Bootstrap aqui!
              }}
            >
              <li>
                <button
                  className={`dropdown-item py-2 rounded-3 mb-1 ${opcaoSelecionada === "Todas as agendas" ? "active fw-medium" : ""}`}
                  onClick={() => handleSelecionar("Todas as agendas")}
                >
                  Todas as agendas
                </button>
              </li>
              <li>
                <button
                  className={`dropdown-item py-2 rounded-3 mb-1 ${opcaoSelecionada === "Atendimento" ? "active fw-medium" : ""}`}
                  onClick={() => handleSelecionar("Atendimento")}
                >
                  Atendimento
                </button>
              </li>
              <li>
                <button
                  className={`dropdown-item py-2 rounded-3 mb-1 ${opcaoSelecionada === "Disponibilidade" ? "active fw-medium" : ""}`}
                  onClick={() => handleSelecionar("Disponibilidade")}
                >
                  Disponibilidade
                </button>
              </li>
              <li>
                <button
                  className={`dropdown-item py-2 rounded-3 mb-1 ${opcaoSelecionada === "Supervisão" ? "active fw-medium" : ""}`}
                  onClick={() => handleSelecionar("Supervisão")}
                >
                  Supervisão
                </button>
              </li>
              <li>
                <button
                  className={`dropdown-item py-2 rounded-3 ${opcaoSelecionada === "Retorno" ? "active fw-medium" : ""}`}
                  onClick={() => handleSelecionar("Retorno")}
                >
                  Retorno
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className='d-flex justify-content-start align-items-center gap-3 mt-4'>
            <span className='fw-semibold'>Legenda</span>
            <div className="d-inline-flex py-2 align-items-center card-lt-hero">
              <span className="fw-semibold mb-0">Atendimento</span>
            </div>
            <div className="d-inline-flex py-2 align-items-center card-lt-hero" style={{background: "#EAF1F8", color: "#557CA8"}}>
              <span className="fw-semibold mb-0">Disponibilizade</span>
            </div>
            <div className="d-inline-flex py-2 align-items-center card-lt-hero" style={{background: "#EFF0FA", color: "#8589C7"}}>
              <span className="fw-semibold mb-0">Supervisão</span>
            </div>
            <div className="d-inline-flex py-2 align-items-center card-lt-hero" style={{background: "#FFF2DF", color: "#B77935"}}>
              <span className="fw-semibold mb-0">Retorno</span>
            </div>
      </div>
      </section>
      
    </>
  )
}

export default Agenda;