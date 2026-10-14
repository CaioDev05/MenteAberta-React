import React, { useState } from 'react'

const Atividades = () => {

  const [dropdownAberto1, setDropdownAberto1] = useState(false);
  const [opcaoSelecionada1, setOpcaoSelecionada1] = useState("Todos");

  const [dropdownAberto2, setDropdownAberto2] = useState(false);
  const [opcaoSelecionada2, setOpcaoSelecionada2] = useState("Todos");

  const handleSelecionar1 = (opcao) => {
    setOpcaoSelecionada1(opcao);
    setDropdownAberto1(false);
  };

  const handleSelecionar2 = (opcao) => {
    setOpcaoSelecionada2(opcao);
    setDropdownAberto2(false);
  };
  return (
    <>
      <section className='hero-section container-fluid px-4 px-xl-5 mt-md-0 mb-5'>

        <div className='d-flex flex-column flex-md-row justify-content-between gap-3 mb-4'>
          <div>
            <div className="d-inline-flex align-items-center mb-3 card-lt-hero">
              <span className="fw-semibold mb-0">
                Participação e Impacto
              </span>
            </div>
            <h1 className='display-5 fw-bold text-body-emphasis lh-1 mb-3 mb-md-4'>
              Atividades
            </h1>
            <span className='text-p lead'>
              Gerencie encontros, grupos e capacitações da sua jornada voluntária.
            </span>
          </div>

          <div className='d-grid d-md-flex justify-content-md-end align-items-md-center'>
            <button className='btn btn-success rounded-pill px-4 py-2 fw-semibold d-flex align-items-center justify-content-center gap-2 flex-shrink-0'>
              <i className="bi bi-plus-lg fs-5"></i>
              Criar atividade
            </button>
          </div>
        </div>

        <div className="row g-3 align-items-center">
          <div className="col-12 col-md">
            <div className="input-group p-2 border rounded-pill bg-white shadow-sm">
              <div className="d-flex align-items-center ms-1">
                <i className="bi bi-search text-secondary"></i>
              </div>

              <input
                type="text"
                className="form-control border-0 bg-transparent ps-3 my-auto shadow-none"
                placeholder="Buscar atividade..."
                aria-label="Buscar"
              />
            </div>
          </div>
          <div className="col-12 col-md-auto position-relative">
            <button
              className="btn bg-white border rounded-pill px-4 fw-semibold shadow-sm d-flex justify-content-between align-items-center w-100 text-dark"
              type="button"
              onClick={() => setDropdownAberto1(!dropdownAberto1)}
              style={{ minWidth: "180px", height: "46px" }}
            >
              {opcaoSelecionada1}
              <i className="bi bi-chevron-down ms-2 fs-6"></i>
            </button>

            <ul
              className={`dropdown-menu w-100 shadow border-0 mt-2 p-2 rounded-4 ${dropdownAberto1 ? 'show d-block' : ''} dropdown-menu-style`}
            >
              {["Todos", "Roda de Conversa", "Encontro de Equipe", "Workshop Online", "Integração", "Capacitação"].map((opcao) => (
                <li key={opcao}>
                  <button
                    className={`dropdown-item py-2 rounded-3 mb-1 ${opcaoSelecionada1 === opcao ? "active fw-medium" : ""}`}
                    onClick={() => handleSelecionar1(opcao)}
                  >
                    {opcao}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-12 col-md-auto position-relative">
            <button
              className="btn bg-white border rounded-pill px-4 fw-semibold shadow-sm d-flex justify-content-between align-items-center w-100 text-dark"
              type="button"
              onClick={() => setDropdownAberto2(!dropdownAberto2)}
              style={{ minWidth: "180px", height: "46px" }}
            >
              {opcaoSelecionada2}
              <i className="bi bi-chevron-down ms-2 fs-6"></i>
            </button>

            <ul
              className={`dropdown-menu w-100 shadow border-0 mt-2 p-2 rounded-4 ${dropdownAberto2 ? 'show d-block' : ''} dropdown-menu-style`}
            >
              {["Todos", "Confirmadas", "Incrições Abertas", "Rascunho", "Canceladas"].map((opcao) => (
                <li key={opcao}>
                  <button
                    className={`dropdown-item py-2 rounded-3 mb-1 ${opcaoSelecionada2 === opcao ? "active fw-medium" : ""}`}
                    onClick={() => handleSelecionar2(opcao)}
                  >
                    {opcao}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

    </>
  )
}

export default Atividades