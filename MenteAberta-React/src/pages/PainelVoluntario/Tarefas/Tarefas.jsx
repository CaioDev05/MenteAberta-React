import { useState } from 'react';

const Tarefas = () => {
  const [busca, setBusca] = useState('');
  const [dropdownPrioridade, setDropdownPrioridade] = useState(false);
  const [filtroPrioridade, setFiltroPrioridade] = useState('Todas as prioridades');
  const [dropdownResponsavel, setDropdownResponsavel] = useState(false);
  const [filtroResponsavel, setFiltroResponsavel] = useState('Minhas tarefas');

  // Modal para criar nova tarefa
  const [modalNovaTarefa, setModalNovaTarefa] = useState(false);
  const [dropdownCategoria, setDropdownCategoria] = useState(false);
  const [dropdownColuna, setDropdownColuna] = useState(false);
  const [dropdownPrioridadeModal, setDropdownPrioridadeModal] = useState(false);
  const [colunaDestino, setColunaDestino] = useState('a_fazer');
  const [novaTarefaForm, setNovaTarefaForm] = useState({
    titulo: '',
    categoria: 'Atendimento',
    descricao: '',
    dataInfo: '',
    prioridade: 'Alta',
    coluna: 'a_fazer'
  });

  // Lista de tarefas inicial baseada na imagem
  const [tarefas, setTarefas] = useState([
    // A fazer
    {
      id: 1,
      titulo: 'Revisar plano de acolhimento',
      descricao: 'Anexar observações da última sessão.',
      categoria: 'Atendimento',
      coluna: 'a_fazer',
      dataInfo: 'Hoje, 17:00',
      prioridade: 'Alta',
      prioridadeTipo: 'danger'
    },
    {
      id: 2,
      titulo: 'Confirmar presença na supervisão',
      descricao: '',
      categoria: 'Equipe',
      coluna: 'a_fazer',
      dataInfo: 'Amanhã',
      prioridade: 'Média',
      prioridadeTipo: 'warning'
    },
    {
      id: 3,
      titulo: 'Preparar material da oficina',
      descricao: '',
      categoria: 'Atividade',
      coluna: 'a_fazer',
      dataInfo: '28 out',
      prioridade: 'Alta',
      prioridadeTipo: 'danger'
    },
    // Em andamento
    {
      id: 4,
      titulo: 'Atualizar disponibilidade de novembro',
      descricao: 'Restam 2 faixas de horário.',
      categoria: 'Agenda',
      coluna: 'em_andamento',
      dataInfo: 'Hoje',
      prioridade: 'Média',
      prioridadeTipo: 'warning'
    },
    {
      id: 5,
      titulo: 'Finalizar relatório mensal',
      descricao: '',
      categoria: 'Coordenação',
      coluna: 'em_andamento',
      dataInfo: '30 out',
      prioridade: 'Alta',
      prioridadeTipo: 'danger'
    },
    {
      id: 6,
      titulo: 'Ler protocolo de encaminhamento',
      descricao: '',
      categoria: 'Capacitação',
      coluna: 'em_andamento',
      dataInfo: '02 nov',
      prioridade: 'Baixa',
      prioridadeTipo: 'success'
    },
    // Concluídas
    {
      id: 7,
      titulo: 'Enviar feedback da capacitação',
      descricao: '',
      categoria: 'Capacitação',
      coluna: 'concluidas',
      dataInfo: 'Concluída ontem',
      prioridade: 'Baixa',
      prioridadeTipo: 'success'
    },
    {
      id: 8,
      titulo: 'Registrar presença do grupo',
      descricao: '',
      categoria: 'Atividade',
      coluna: 'concluidas',
      dataInfo: 'Concluída em 20 out',
      prioridade: 'Média',
      prioridadeTipo: 'warning'
    },
    {
      id: 9,
      titulo: 'Revisar dados do perfil',
      descricao: '',
      categoria: 'Conta',
      coluna: 'concluidas',
      dataInfo: 'Concluída em 18 out',
      prioridade: 'Baixa',
      prioridadeTipo: 'success'
    }
  ]);

  const cardsMetricas = [
    {
      id: 1,
      titulo: 'PENDENTES',
      valor: '7',
      subtexto: '2 vencem hoje',
      icone: 'bi-card-checklist',
      bgIcone: 'bg-primary-subtle',
      corIcone: 'text-primary'
    },
    {
      id: 2,
      titulo: 'EM ANDAMENTO',
      valor: '3',
      subtexto: '1 de alta prioridade',
      icone: 'bi-arrow-clockwise',
      bgIcone: 'bg-warning-subtle',
      corIcone: 'text-warning-emphasis'
    },
    {
      id: 3,
      titulo: 'CONCLUÍDAS',
      valor: '12',
      subtexto: 'neste mês',
      icone: 'bi-check2-circle',
      bgIcone: 'bg-success-subtle',
      corIcone: 'text-success'
    },
    {
      id: 4,
      titulo: 'PRODUTIVIDADE',
      valor: '86%',
      subtexto: '+8% em outubro',
      icone: 'bi-bar-chart-line',
      bgIcone: 'bg-primary-subtle',
      corIcone: 'text-primary'
    }
  ];

  const colunasConfig = [
    {
      id: 'a_fazer',
      nome: 'A fazer',
      contagem: 4,
      corDot: 'text-primary',
      bgBadge: 'bg-primary-subtle text-primary'
    },
    {
      id: 'em_andamento',
      nome: 'Em andamento',
      contagem: 3,
      corDot: 'text-warning',
      bgBadge: 'bg-warning-subtle text-warning-emphasis'
    },
    {
      id: 'concluidas',
      nome: 'Concluídas',
      contagem: 12,
      corDot: 'text-success',
      bgBadge: 'bg-success-subtle text-success'
    }
  ];

  const abrirModalNovaTarefa = (coluna = 'a_fazer') => {
    setColunaDestino(coluna);
    setNovaTarefaForm({
      titulo: '',
      categoria: 'Atendimento',
      descricao: '',
      dataInfo: 'Hoje',
      prioridade: 'Alta',
      coluna
    });
    setDropdownCategoria(false);
    setDropdownColuna(false);
    setDropdownPrioridadeModal(false);
    setModalNovaTarefa(true);
  };

  const salvarNovaTarefa = (e) => {
    e.preventDefault();
    if (!novaTarefaForm.titulo.trim()) return;

    let prioridadeTipo = 'danger';
    if (novaTarefaForm.prioridade === 'Média') prioridadeTipo = 'warning';
    if (novaTarefaForm.prioridade === 'Baixa') prioridadeTipo = 'success';

    const nova = {
      id: Date.now(),
      titulo: novaTarefaForm.titulo,
      descricao: novaTarefaForm.descricao,
      categoria: novaTarefaForm.categoria,
      coluna: novaTarefaForm.coluna || colunaDestino,
      dataInfo: novaTarefaForm.dataInfo || 'Hoje',
      prioridade: novaTarefaForm.prioridade,
      prioridadeTipo
    };

    setTarefas([...tarefas, nova]);
    setModalNovaTarefa(false);
  };

  // Filtragem de tarefas
  const tarefasFiltradas = tarefas.filter((item) => {
    const matchBusca =
      item.titulo.toLowerCase().includes(busca.toLowerCase()) ||
      item.categoria.toLowerCase().includes(busca.toLowerCase()) ||
      (item.descricao && item.descricao.toLowerCase().includes(busca.toLowerCase()));

    const matchPrioridade =
      filtroPrioridade === 'Todas as prioridades' || item.prioridade === filtroPrioridade;

    return matchBusca && matchPrioridade;
  });

  return (
    <>
      <section className="container-fluid px-4 py-4 px-xl-5 mt-md-0">
        {/* Cabeçalho da Página */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
          <div>
            <div className="d-inline-flex align-items-center mb-3 card-lt-hero">
              <span className="fw-semibold mb-0">
                Organização Pessoal
              </span>
            </div>
            <h1 className='display-5 fw-bold text-body-emphasis lh-1 mb-3 mb-md-4'>
              Tarefas
            </h1>
            <p className="text-secondary mb-0">
              Priorize demandas atribuídas e acompanhe o que já foi entregue.
            </p>
          </div>

          <div className="d-grid d-md-flex justify-content-md-end align-items-md-center">
            <button
              type="button"
              className="btn btn-success rounded-pill px-4 py-2 fw-semibold d-flex align-items-center justify-content-center gap-2 flex-shrink-0"
              onClick={() => abrirModalNovaTarefa('a_fazer')}
            >
              <i className="bi bi-plus-lg fs-6"></i>
              <span>Nova tarefa</span>
            </button>
          </div>
        </div>

        {/* 4 Cards de Métricas */}
        <div className="row g-3 mb-4">
          {cardsMetricas.map((card) => (
            <div key={card.id} className="col-12 col-sm-6 col-xl-3">
              <div className="card border rounded-4 bg-white shadow-sm p-3 h-100">
                <div className="d-flex align-items-center gap-3">
                  <div
                    className={`rounded-4 p-3 d-flex align-items-center justify-content-center ${card.bgIcone}`}
                  >
                    <i className={`bi ${card.icone} fs-4 ${card.corIcone}`}></i>
                  </div>
                  <div>
                    <span className="d-block text-secondary text-uppercase fw-bold small">
                      {card.titulo}
                    </span>
                    <h3 className="fw-bold text-dark mb-0">{card.valor}</h3>
                    <small className="text-secondary">{card.subtexto}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Barra de Pesquisa e Filtros */}
        <div className="row g-3 align-items-center mb-4">
          {/* Campo de Busca */}
          <div className="col-12 col-md">
            <div className="input-group p-2 border rounded-pill bg-white shadow-sm">
              <span className="input-group-text border-0 bg-transparent ps-3 pe-2 text-secondary">
                <i className="bi bi-search"></i>
              </span>
              <input
                type="text"
                className="form-control border-0 bg-transparent shadow-none"
                placeholder="Buscar tarefa..."
                aria-label="Buscar tarefa"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />
            </div>
          </div>

          {/* Filtro Dropdown: Prioridades */}
          <div className="col-12 col-md-auto position-relative" >
            <button
              className="btn bg-white border rounded-pill px-4 py-2 fw-semibold shadow-sm d-flex justify-content-start align-items-center w-100 text-dark gap-2"
              type="button"
              onClick={() => {
                setDropdownPrioridade(!dropdownPrioridade);
                setDropdownResponsavel(false);
              }}
              
            >
              <i className="bi bi-chevron-down fs-6 text-dark"></i>
              <span>{filtroPrioridade}</span>
            </button>

            {dropdownPrioridade && (
              <ul className="dropdown-menu w-100 shadow border-0 mt-2 p-2 rounded-4 show d-block position-absolute end-0 z-3 dropdown-menu-style"
              style={{minWidth: '220px'}}>
                {['Todas as prioridades', 'Alta', 'Média', 'Baixa'].map((prioridade) => (
                  <li key={prioridade}>
                    <button
                      className={`dropdown-item py-2 rounded-3 mb-1 ${
                        filtroPrioridade === prioridade ? 'active fw-medium' : ''
                      } `}
                      onClick={() => {
                        setFiltroPrioridade(prioridade);
                        setDropdownPrioridade(false);
                      }}
                    >
                      {prioridade}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Filtro Dropdown: Responsável */}
          <div className="col-12 col-md-auto position-relative" >
            <button
              className="btn bg-white border rounded-pill px-4 py-2 fw-semibold shadow-sm d-flex justify-content-between align-items-center w-100 text-dark gap-2"
              type="button"
              onClick={() => {
                setDropdownResponsavel(!dropdownResponsavel);
                setDropdownPrioridade(false);
              }}
              
            >
              <i className="bi bi-chevron-down fs-6 text-dark"></i>
              <span>{filtroResponsavel}</span>
            </button>

            {dropdownResponsavel && (
              <ul className="dropdown-menu w-100 shadow border-0 mt-2 p-2 rounded-4 show d-block position-absolute end-0 z-3 dropdown-menu-style">
                {['Minhas tarefas', 'Todas as tarefas', 'Atribuídas à equipe'].map((opcao) => (
                  <li key={opcao}>
                    <button
                      className={`dropdown-item py-2 rounded-3 mb-1 ${
                        filtroResponsavel === opcao ? 'active fw-medium' : ''
                      }`}
                      onClick={() => {
                        setFiltroResponsavel(opcao);
                        setDropdownResponsavel(false);
                      }}
                    >
                      {opcao}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Quadro Kanban (3 Colunas) */}
        <div className="row g-4 pb-5">
          {colunasConfig.map((coluna) => {
            const itensColuna = tarefasFiltradas.filter((t) => t.coluna === coluna.id);

            return (
              <div key={coluna.id} className="col-12 col-lg-4">
                <div className="border rounded-4 p-3 bg-white bg-opacity-50 h-100">
                  {/* Cabeçalho da Coluna */}
                  <div className="d-flex align-items-center justify-content-between mb-3 px-1">
                    <div className="d-flex align-items-center gap-2">
                      <i className={`bi bi-circle-fill fs-6 ${coluna.corDot}`}></i>
                      <h2 className="h6 fw-bold text-dark mb-0">{coluna.nome}</h2>
                      <span className={`badge rounded-pill fw-semibold px-2 py-1 ${coluna.bgBadge}`}>
                        {coluna.contagem}
                      </span>
                    </div>

                    <button
                      type="button"
                      className="btn btn-sm btn-light bg-white border rounded-circle shadow-sm d-flex align-items-center justify-content-center text-secondary p-1 lh-1"
                      aria-label={`Adicionar tarefa em ${coluna.nome}`}
                      onClick={() => abrirModalNovaTarefa(coluna.id)}
                    >
                      <i className="bi bi-plus-lg fs-6"></i>
                    </button>
                  </div>

                  {/* Cards de Tarefas */}
                  <div>
                    {itensColuna.map((tarefa) => (
                      <div
                        key={tarefa.id}
                        className="card border rounded-4 bg-white shadow-sm p-3 mb-3"
                      >
                        {/* Categoria e Menu */}
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <span className="badge rounded-pill bg-light text-secondary border px-3 py-2 fw-medium">
                            {tarefa.categoria}
                          </span>

                          <button
                            type="button"
                            className="btn btn-link text-secondary p-0 border-0 shadow-none"
                            aria-label="Mais opções"
                          >
                            <i className="bi bi-three-dots fs-5"></i>
                          </button>
                        </div>

                        {/* Título */}
                        <h3 className="h6 fw-bold text-dark mb-1">{tarefa.titulo}</h3>

                        {/* Descrição opcional */}
                        {tarefa.descricao && (
                          <p className="text-secondary small mb-3">{tarefa.descricao}</p>
                        )}

                        {/* Rodapé do Card */}
                        <div className="d-flex align-items-center justify-content-between mt-3 pt-1">
                          <div className="d-flex align-items-center text-secondary small gap-1">
                            <i
                              className={`bi ${
                                tarefa.coluna === 'concluidas'
                                  ? 'bi-check-circle text-success'
                                  : 'bi-calendar2-week'
                              }`}
                            ></i>
                            <span>{tarefa.dataInfo}</span>
                          </div>

                          <div className="d-flex align-items-center text-secondary small gap-1">
                            <i
                              className={`bi bi-circle-fill text-${tarefa.prioridadeTipo}`}
                            ></i>
                            <span>{tarefa.prioridade}</span>
                          </div>
                        </div>
                      </div>
                    ))}

                    {itensColuna.length === 0 && (
                      <div className="text-center py-4 text-secondary small">
                        Nenhuma tarefa encontrada
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Modal Nova Tarefa */}
      {modalNovaTarefa && (
        <>
          <div
            className="modal-backdrop fade show"
            onClick={() => setModalNovaTarefa(false)}
          ></div>
          <div
            className="modal fade show d-block"
            tabIndex="-1"
            role="dialog"
            aria-modal="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content border-0 rounded-4 shadow p-3">
                <div className="modal-header border-0 pb-0">
                  <h5 className="modal-title fw-bold text-dark">Criar Nova Tarefa</h5>
                  <button
                    type="button"
                    className="btn-close shadow-none"
                    onClick={() => setModalNovaTarefa(false)}
                    aria-label="Fechar"
                  ></button>
                </div>

                <form onSubmit={salvarNovaTarefa}>
                  <div className="modal-body">
                    <div className="mb-3">
                      <label className="form-label small fw-semibold text-secondary">
                        Título da Tarefa
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-custom"
                        placeholder="Ex: Revisar plano de acolhimento"
                        value={novaTarefaForm.titulo}
                        onChange={(e) =>
                          setNovaTarefaForm({ ...novaTarefaForm, titulo: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label small fw-semibold text-secondary">
                        Descrição (opcional)
                      </label>
                      <textarea
                        className="form-control form-control-custom"
                        rows="2"
                        placeholder="Ex: Anexar observações da última sessão."
                        value={novaTarefaForm.descricao}
                        onChange={(e) =>
                          setNovaTarefaForm({ ...novaTarefaForm, descricao: e.target.value })
                        }
                      ></textarea>
                    </div>

                    <div className="row g-2 mb-3">
                      <div className="col-6 position-relative">
                        <label className="form-label small fw-semibold text-secondary">
                          Categoria
                        </label>
                        <button
                          className="form-control form-control-custom d-flex justify-content-start gap-1 fw-semibold"
                          type="button"
                          onClick={() => {
                            setDropdownCategoria(!dropdownCategoria);
                            setDropdownColuna(false);
                            setDropdownPrioridadeModal(false);
                          }}
                        >
                          <i className="bi bi-chevron-down fs-6 text-dark"></i>
                          <span>{novaTarefaForm.categoria}</span>
                        </button>

                        {dropdownCategoria && (
                          <ul className="dropdown-menu w-100 shadow border-0 mt-2 p-2 rounded-4 show d-block position-absolute start-0 z-3 dropdown-menu-style">
                            {['Atendimento', 'Equipe', 'Atividade', 'Agenda', 'Coordenação', 'Capacitação', 'Conta'].map((categoria) => (
                              <li key={categoria}>
                                <button
                                  type="button"
                                  className={`dropdown-item py-2 rounded-3 mb-1 ${
                                    novaTarefaForm.categoria === categoria ? 'active fw-medium' : ''
                                  }`}
                                  onClick={() => {
                                    setNovaTarefaForm({ ...novaTarefaForm, categoria });
                                    setDropdownCategoria(false);
                                  }}
                                >
                                  {categoria}
                                </button>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      <div className="col-6 position-relative">
                        <label className="form-label small fw-semibold text-secondary">
                          Coluna
                        </label>
                        <button
                          className="form-control form-control-custom d-flex justify-content-start gap-1 fw-semibold"
                          type="button"
                          onClick={() => {
                            setDropdownColuna(!dropdownColuna);
                            setDropdownCategoria(false);
                            setDropdownPrioridadeModal(false);
                          }}
                        >
                          <i className="bi bi-chevron-down fs-6 text-dark"></i>
                          <span>
                            {colunasConfig.find((c) => c.id === novaTarefaForm.coluna)?.nome || 'A fazer'}
                          </span>
                        </button>

                        {dropdownColuna && (
                          <ul className="dropdown-menu w-100 shadow border-0 mt-2 p-2 rounded-4 show d-block position-absolute start-0 z-3 dropdown-menu-style">
                            {colunasConfig.map((col) => (
                              <li key={col.id}>
                                <button
                                  type="button"
                                  className={`dropdown-item py-2 rounded-3 mb-1 ${
                                    novaTarefaForm.coluna === col.id ? 'active fw-medium' : ''
                                  }`}
                                  onClick={() => {
                                    setNovaTarefaForm({ ...novaTarefaForm, coluna: col.id });
                                    setDropdownColuna(false);
                                  }}
                                >
                                  {col.nome}
                                </button>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>

                    <div className="row g-2 mb-3">
                      <div className="col-6 position-relative">
                        <label className="form-label small fw-semibold text-secondary">
                          Prioridade
                        </label>
                        <button
                          className="form-control form-control-custom d-flex justify-content-start gap-1 fw-semibold"
                          type="button"
                          onClick={() => {
                            setDropdownPrioridadeModal(!dropdownPrioridadeModal);
                            setDropdownCategoria(false);
                            setDropdownColuna(false);
                          }}
                        >
                          <i className="bi bi-chevron-down fs-6 text-dark"></i>
                          <span>{novaTarefaForm.prioridade}</span>
                        </button>

                        {dropdownPrioridadeModal && (
                          <ul className="dropdown-menu w-100 shadow border-0 mt-2 p-2 rounded-4 show d-block position-absolute start-0 z-3 dropdown-menu-style">
                            {['Alta', 'Média', 'Baixa'].map((prioridade) => (
                              <li key={prioridade}>
                                <button
                                  type="button"
                                  className={`dropdown-item py-2 rounded-3 mb-1 ${
                                    novaTarefaForm.prioridade === prioridade ? 'active fw-medium' : ''
                                  }`}
                                  onClick={() => {
                                    setNovaTarefaForm({ ...novaTarefaForm, prioridade });
                                    setDropdownPrioridadeModal(false);
                                  }}
                                >
                                  {prioridade}
                                </button>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      <div className="col-6">
                        <label className="form-label small fw-semibold text-secondary">
                          Prazo / Data
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-custom"
                          placeholder="Ex: Hoje, 17:00 ou 28 out"
                          value={novaTarefaForm.dataInfo}
                          onChange={(e) =>
                            setNovaTarefaForm({ ...novaTarefaForm, dataInfo: e.target.value })
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="modal-footer border-0 pt-0">
                    <button
                      type="button"
                      className="btn btn-outline-secondary rounded-pill px-4"
                      onClick={() => setModalNovaTarefa(false)}
                    >
                      Cancelar
                    </button>
                    <button type="submit" className="btn btn-success rounded-pill px-4">
                      Salvar tarefa
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Tarefas;