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
      <section className='container-fluid px-4 py-5 px-xl-5 mt-md-0'>

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
            <span className='text-secondary mb-0'>
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

        {/* <div className="d-flex gap-3">
          <div className='col-3 content-box'>
            <div className="d-flex">
              <div className='d-flex align-items-center'>
                icon
              </div>
              <div>
                <p>ATIVIDADES NO MÊS</p>
                <p>8</p>
                <p>3 ainda esta semana</p>
              </div>
            </div>
          </div>
          <div className='content-box'>

          </div>
          <div className='content-box'>

          </div>
          <div className='content-box'>

          </div>
        </div> */}

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

      <section className='container-fluid px-4 px-xl-5 pb-5'>
        <div className="bg-white rounded-4 border shadow-sm overflow-hidden">
          {/* Header da lista */}
          <div className='d-flex flex-wrap justify-content-between align-items-center p-3 px-4 border-bottom' style={{ backgroundColor: '#FBFBFA' }}>
            <div className="d-flex align-items-baseline gap-3">
              <span className='fs-5 fw-bold text-dark'>Próximas atividades</span>
              <span className='text-secondary small fw-medium'>5 atividades</span>
            </div>

            <div className='d-flex align-items-center gap-2 mt-2 mt-md-0'>
              <button 
                type="button" 
                className='btn btn-success rounded-pill px-4 py-2 fw-semibold d-flex align-items-center justify-content-center gap-2 flex-shrink-0'
              >
                <i className="bi bi-list-task"></i>
                Lista
              </button>
            </div>
          </div>

          {/* Lista de atividades */}
          <div className='p-0'>
            <ul className='list-group list-group-flush'>
              {[
                {
                  id: 1,
                  titulo: "Grupo de escuta: ansiedade",
                  subtitulo: "Roda de conversa",
                  icon: "bi-stars",
                  iconBg: "#E6EFEA",
                  iconColor: "#476355",
                  dataHora: "24 out • 19:00",
                  participantes: "12 inscritos",
                  duracao: "1h30",
                  status: "Confirmada",
                  statusBg: "#E6EFEA",
                  statusColor: "#476355"
                },
                {
                  id: 2,
                  titulo: "Supervisão clínica mensal",
                  subtitulo: "Encontro de equipe",
                  icon: "bi-people",
                  iconBg: "#EEF0FB",
                  iconColor: "#5865F2",
                  dataHora: "26 out • 10:00",
                  participantes: "8 voluntários",
                  duracao: "1h",
                  status: "Confirmada",
                  statusBg: "#EEF0FB",
                  statusColor: "#5865F2"
                },
                {
                  id: 3,
                  titulo: "Oficina de autocuidado",
                  subtitulo: "Workshop online",
                  icon: "bi-stars",
                  iconBg: "#E9F2FA",
                  iconColor: "#2F80ED",
                  dataHora: "30 out • 18:30",
                  participantes: "21 inscritos",
                  duracao: "2h",
                  status: "Inscrições abertas",
                  statusBg: "#E9F2FA",
                  statusColor: "#2F80ED"
                },
                {
                  id: 4,
                  titulo: "Acolhimento de novos voluntários",
                  subtitulo: "Integração",
                  icon: "bi-stars",
                  iconBg: "#FDF4E7",
                  iconColor: "#D97706",
                  dataHora: "04 nov • 14:00",
                  participantes: "6 inscritos",
                  duracao: "1h",
                  status: "Rascunho",
                  statusBg: "#FDF4E7",
                  statusColor: "#D97706"
                },
                {
                  id: 5,
                  titulo: "Comunicação não violenta",
                  subtitulo: "Capacitação",
                  icon: "bi-stars",
                  iconBg: "#E6EFEA",
                  iconColor: "#476355",
                  dataHora: "12 nov • 20:00",
                  participantes: "16 inscritos",
                  duracao: "1h30",
                  status: "Confirmada",
                  statusBg: "#E6EFEA",
                  statusColor: "#476355"
                }
              ].map((item) => (
                <li key={item.id} className='list-group-item px-4 py-3 border-bottom'>
                  <div className='row align-items-center g-3'>
                    {/* Ícone e Título */}
                    <div className='col-12 col-lg-4 d-flex align-items-center gap-3'>
                      <div 
                        className='rounded-4 d-flex align-items-center justify-content-center flex-shrink-0' 
                        style={{ width: '48px', height: '48px', backgroundColor: item.iconBg, color: item.iconColor }}
                      >
                        <i className={`bi ${item.icon} fs-5`}></i>
                      </div>
                      <div>
                        <h6 className='fw-bold mb-0 text-dark'>{item.titulo}</h6>
                        <small className='text-secondary'>{item.subtitulo}</small>
                      </div>
                    </div>

                    {/* Data e Horário */}
                    <div className='col-6 col-sm-3 col-lg-2'>
                      <span className='d-block text-secondary text-uppercase fw-semibold' style={{ fontSize: '0.72rem', letterSpacing: '0.5px' }}>
                        DATA E HORÁRIO
                      </span>
                      <span className='fw-medium text-dark small'>{item.dataHora}</span>
                    </div>

                    {/* Participantes */}
                    <div className='col-6 col-sm-3 col-lg-2'>
                      <span className='d-block text-secondary text-uppercase fw-semibold' style={{ fontSize: '0.72rem', letterSpacing: '0.5px' }}>
                        PARTICIPANTES
                      </span>
                      <span className='fw-medium text-dark small'>{item.participantes}</span>
                    </div>

                    {/* Duração */}
                    <div className='col-4 col-sm-2 col-lg-1'>
                      <span className='d-block text-secondary text-uppercase fw-semibold' style={{ fontSize: '0.72rem', letterSpacing: '0.5px' }}>
                        DURAÇÃO
                      </span>
                      <span className='fw-medium text-dark small'>{item.duracao}</span>
                    </div>

                    {/* Status Badge */}
                    <div className='col-5 col-sm-3 col-lg-2 text-start text-lg-center'>
                      <span 
                        className='badge rounded-pill px-3 py-2 fw-medium' 
                        style={{ backgroundColor: item.statusBg, color: item.statusColor, fontSize: '0.8rem' }}
                      >
                        {item.status}
                      </span>
                    </div>

                    {/* Ações / Mais opções */}
                    <div className='col-3 col-sm-1 col-lg-1 text-end'>
                      <button type="button" className='btn btn-link text-secondary p-0 border-0 shadow-none'>
                        <i className="bi bi-three-dots fs-5"></i>
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer da tabela */}
          <div className='d-flex justify-content-between align-items-center p-3 px-4 border-top bg-white'>
            <span className='text-secondary small'>
              Mostrando 5 de 18 atividades
            </span>
            <button 
              type="button" 
              className='btn btn-outline-secondary rounded-pill px-3 py-1 small d-inline-flex align-items-center gap-2 fw-semibold border shadow-sm'
              style={{ fontSize: '0.875rem' }}
            >
              <i className="bi bi-arrow-right"></i>
              Ver todas
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Atividades