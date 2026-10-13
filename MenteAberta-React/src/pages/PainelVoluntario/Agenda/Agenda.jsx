import React, { useState } from 'react';

const Agenda = () => {

  const [dropdownAberto, setDropdownAberto] = useState(false);
  const [opcaoSelecionada, setOpcaoSelecionada] = useState("Todos");

  const [dataAtual, setDataAtual] = useState(new Date());

  const [dataSelecionada, setDataSelecionada] = useState(new Date());

  const handleSelecionar = (opcao) => {
    setOpcaoSelecionada(opcao);
    setDropdownAberto(false);
  };

  const irParaHoje = () => {
    const hoje = new Date();

    setDataAtual(hoje);
    setDataSelecionada(hoje);
  };

  const mesAnterior = () => {
    setDataAtual(new Date(dataAtual.getFullYear(), dataAtual.getMonth() - 1, 1));
  };

  const proximoMes = () => {
    setDataAtual(new Date(dataAtual.getFullYear(), dataAtual.getMonth() + 1, 1));
  };

  const gerarSemanas = () => {

    const ano = dataAtual.getFullYear();
    const mes = dataAtual.getMonth();

    const dataRealHoje = new Date();

    const diasNoMes = new Date(ano, mes + 1, 0).getDate();

    const primeiroDiaDaSemana = new Date(ano, mes, 1).getDay();

    const diasMesAnterior = new Date(ano, mes, 0).getDate();

    let semanas = [];
    let semanaAtual = [];

    for (let i = primeiroDiaDaSemana - 1; i >= 0; i--) {

      const numeroDia = diasMesAnterior - i;

      semanaAtual.push({
        dia: numeroDia,
        data: new Date(
          ano,
          mes - 1,
          numeroDia
        ),
        outOfMonth: true,
        eventos: [],
        hoje: false
      });
    }

    for (let i = 1; i <= diasNoMes; i++) {

      const isHoje =
        dataRealHoje.getDate() === i &&
        dataRealHoje.getMonth() === mes &&
        dataRealHoje.getFullYear() === ano;

      let eventos = [];
      if (ano === 2026 && mes === 9) {

        if (i === 2)
          eventos.push({
            titulo: "09:00 • Acolhimento",
            tipo: "atendimento"
          });

        if (i === 4)
          eventos.push({
            titulo: "14:30 • Supervisão",
            tipo: "supervisao"
          });

        if (i === 6)
          eventos.push({
            titulo: "Disponível 10-13h",
            tipo: "disponibilidade"
          });

        if (i === 8)
          eventos.push({
            titulo: "16:00 • Grupo",
            tipo: "atendimento"
          });

        if (i === 10)
          eventos.push({
            titulo: "11:30 • Retorno",
            tipo: "retorno"
          });

        if (i === 14)
          eventos.push({
            titulo: "Disponível 9-12h",
            tipo: "disponibilidade"
          });

        if (i === 16)
          eventos.push({
            titulo: "15:00 • Acolhimento",
            tipo: "atendimento"
          });

        if (i === 21)
          eventos.push({
            titulo: "09:30 • Retorno",
            tipo: "retorno"
          });

        if (i === 23)
          eventos.push({
            titulo: "13:00 • Supervisão",
            tipo: "supervisao"
          });

        if (i === 25)
          eventos.push({
            titulo: "Disponível 15-18h",
            tipo: "disponibilidade"
          });

        if (i === 28)
          eventos.push({
            titulo: "10:00 • Acolhimento",
            tipo: "atendimento"
          });

        if (i === 31)
          eventos.push({
            titulo: "11:00 • Grupo",
            tipo: "atendimento"
          });
      }

      semanaAtual.push({
        dia: i,
        data: new Date(
          ano,
          mes,
          i
        ),
        outOfMonth: false,
        eventos,
        hoje: isHoje
      });

      if (semanaAtual.length === 7) {
        semanas.push(semanaAtual);
        semanaAtual = [];
      }
    }

    if (semanaAtual.length > 0) {

      let proximoDia = 1;

      while (semanaAtual.length < 7) {

        const numeroDia = proximoDia++;

        semanaAtual.push({
          dia: numeroDia,
          data: new Date(
            ano,
            mes + 1,
            numeroDia
          ),
          outOfMonth: true,
          eventos: [],
          hoje: false
        });

      }

      semanas.push(semanaAtual);
    }

    return semanas;
  };

  const getEstiloEvento = (tipo) => {

    switch (tipo) {

      case 'atendimento':
        return {
          className: "card-lt-hero"
        };

      case 'disponibilidade':
        return {
          style: { background: "#EAF1F8", color: "#557CA8" }
        };

      case 'supervisao':
        return {
          style: { background: "#EFF0FA", color: "#8589C7" }
        };

      case 'retorno':
        return {
          style: { background: "#FFF2DF", color: "#B77935" }
        };

      default:
        return {};

    }

  };

  const diaEstaSelecionado = (data) => {

    return (
      data.getDate() === dataSelecionada.getDate() &&
      data.getMonth() === dataSelecionada.getMonth() &&
      data.getFullYear() === dataSelecionada.getFullYear()
    );

  };

  const nomesMeses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ];

  const tituloMesAno = `${nomesMeses[dataAtual.getMonth()]} ${dataAtual.getFullYear()}`;

  const semanasCalendario = gerarSemanas();

  const hoje = new Date();
  const tituloDiaMes = `${hoje.getDate()} ${nomesMeses[hoje.getMonth()]}`;

  return (
    <>
      <section className='hero-section container-fluid px-4 px-xl-5 mt-md-0 mb-5'>
        <div className='d-flex flex-column flex-md-row justify-content-between gap-3 mb-4'>
          <div>
            <div className="d-inline-flex align-items-center mb-3 card-lt-hero">
              <span className="fw-semibold mb-0">
                Organização do Voluntário
              </span>
            </div>
            <h1 className='display-5 fw-bold text-body-emphasis lh-1 mb-3 mb-md-4'>
              Agenda
            </h1>
            <span className='text-p lead'>
              Acompanhe seus atendimentos, atividades e horários disponíveis.
            </span>
          </div>

          <div className='d-grid d-md-flex justify-content-md-end align-items-md-center'>
            <button className='btn btn-success rounded-pill px-4 py-2 fw-semibold d-flex align-items-center justify-content-center gap-2 flex-shrink-0'>
              <i className="bi bi-plus-lg fs-5"></i>
              Novo Compromisso
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
                placeholder="Buscar evento ou paciente..."
                aria-label="Buscar"
              />
            </div>
          </div>

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
              style={{ position: 'absolute', top: '100%', left: 0, zIndex: 1050, '--bs-dropdown-link-active-bg': '#3d5a4f' }}
            >
              {["Todos", "Atendimento", "Disponibilidade", "Supervisão", "Retorno"].map((opcao) => (
                <li key={opcao}>
                  <button
                    className={`dropdown-item py-2 rounded-3 mb-1 ${opcaoSelecionada === opcao ? "active fw-medium" : ""}`}
                    onClick={() => handleSelecionar(opcao)}
                  >
                    {opcao}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='d-flex flex-wrap justify-content-start align-items-center gap-3 mt-4'>
          <span className='fw-semibold'>
            Legenda
          </span>

          <div className="d-inline-flex py-2 align-items-center card-lt-hero">
            <span
              className="fw-semibold mb-0 px-2"
              style={{ fontSize: "0.85rem" }}
            >
              Atendimento
            </span>
          </div>

          <div
            className="d-inline-flex py-2 align-items-center rounded-pill"
            style={{ background: "#EAF1F8", color: "#557CA8" }}
          >
            <span
              className="fw-semibold mb-0 px-3"
              style={{ fontSize: "0.85rem" }}
            >
              Disponibilidade
            </span>
          </div>

          <div
            className="d-inline-flex py-2 align-items-center rounded-pill"
            style={{ background: "#EFF0FA", color: "#8589C7" }}
          >
            <span
              className="fw-semibold mb-0 px-3"
              style={{ fontSize: "0.85rem" }}
            >
              Supervisão
            </span>
          </div>

          <div
            className="d-inline-flex py-2 align-items-center rounded-pill"
            style={{ background: "#FFF2DF", color: "#B77935" }}
          >
            <span
              className="fw-semibold mb-0 px-3"
              style={{ fontSize: "0.85rem" }}
            >
              Retorno
            </span>
          </div>
        </div>

        <div className="row g-4 mt-3">
          <div className="col-12 col-xl-9 col-lg-8">
            <div className="bg-white p-3 p-md-4 rounded-4 shadow-sm border h-100">
              <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-3">
                <div className="d-flex align-items-center gap-3">
                  <h2 className="fw-bold mb-0 text-capitalize">
                    {tituloMesAno}
                  </h2>

                  <span
                    className="badge rounded-pill text-dark fw-medium px-3 py-2"
                    style={{ backgroundColor: "#F3F0EA", fontSize: "0.85rem" }}
                  >
                    {dataAtual.getFullYear() === 2026 && dataAtual.getMonth() === 9 ? "12 compromissos" : "0 compromissos"}
                  </span>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <button
                    onClick={irParaHoje}
                    className="btn btn-outline-secondary rounded-pill px-4 fw-medium text-dark bg-white shadow-sm"
                    style={{ borderColor: "#e5e5e5" }}
                  >
                    Hoje
                  </button>

                  <div className="d-flex gap-2">

                    <button
                      onClick={mesAnterior}
                      className="btn btn-outline-secondary rounded-circle text-dark bg-white shadow-sm p-0 d-flex align-items-center justify-content-center"
                      style={{ borderColor: "#e5e5e5", width: "40px", height: "40px" }}
                    >
                      <i className="bi bi-chevron-left"></i>
                    </button>

                    <button
                      onClick={proximoMes}
                      className="btn btn-outline-secondary rounded-circle text-dark bg-white shadow-sm p-0 d-flex align-items-center justify-content-center"
                      style={{ borderColor: "#e5e5e5", width: "40px", height: "40px" }}
                    >
                      <i className="bi bi-chevron-right"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div className="table-responsive">
                <table
                  className="table table-bordered mb-0"
                  style={{ minWidth: "550px", tableLayout: "fixed" }}
                >
                  <thead>
                    <tr
                      className="text-muted"
                      style={{ fontSize: "0.75rem" }}
                    >

                      <th
                        className="fw-semibold text-uppercase border-0 pb-3 text-center"
                        style={{ width: "14.28%" }}
                      >
                        DOM
                      </th>

                      <th
                        className="fw-semibold text-uppercase border-0 pb-3 text-center"
                        style={{ width: "14.28%" }}
                      >
                        SEG
                      </th>

                      <th
                        className="fw-semibold text-uppercase border-0 pb-3 text-center"
                        style={{ width: "14.28%" }}
                      >
                        TER
                      </th>

                      <th
                        className="fw-semibold text-uppercase border-0 pb-3 text-center"
                        style={{ width: "14.28%" }}
                      >
                        QUA
                      </th>

                      <th
                        className="fw-semibold text-uppercase border-0 pb-3 text-center"
                        style={{ width: "14.28%" }}
                      >
                        QUI
                      </th>

                      <th
                        className="fw-semibold text-uppercase border-0 pb-3 text-center"
                        style={{ width: "14.28%" }}
                      >
                        SEX
                      </th>

                      <th
                        className="fw-semibold text-uppercase border-0 pb-3 text-center"
                        style={{ width: "14.28%" }}
                      >
                        SÁB
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {semanasCalendario.map((semana, indexSemana) => (
                      <tr key={indexSemana}>
                        {semana.map((dia, indexDia) => (
                          <td
                            key={indexDia}
                            className={`p-2 p-md-3 ${dia.outOfMonth ? 'text-black-50 bg-light' : ''}`}
                            style={{ height: "130px", verticalAlign: "top", border: "1px solid #e5e5e5", cursor: "pointer" }}
                            onClick={() => setDataSelecionada(dia.data)}
                          >

                            <div className="d-flex justify-content-between align-items-start">
                              <span
                                className={`fw-medium ${diaEstaSelecionado(dia.data)
                                  ? 'text-white rounded-circle d-flex align-items-center justify-content-center'
                                  : ''
                                  }`}
                                style={
                                  diaEstaSelecionado(dia.data)
                                    ? { width: "28px", height: "28px", marginTop: "-4px", marginLeft: "-4px", background: "#3d5a4f" }
                                    : {}
                                }
                              >
                                {dia.dia}
                              </span>

                              {dia.hoje && (
                                <span
                                  className="text-secondary fw-bold"
                                  style={{ fontSize: "0.65rem" }}
                                >
                                  HOJE
                                </span>
                              )}
                            </div>

                            <div className="mt-2 d-flex flex-column gap-1 overflow-hidden">
                              {dia.eventos.map((evento, i) => {
                                const estilos =
                                  getEstiloEvento(evento.tipo);

                                return (
                                  <div
                                    key={i}
                                    className={`rounded px-2 py-1 text-truncate fw-medium ${estilos.className || ''}`}
                                    style={{ fontSize: "0.75rem", ...estilos.style }}
                                    title={evento.titulo}
                                  >
                                    {evento.titulo}
                                  </div>
                                );
                              })}
                            </div>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="col-12 col-xl-3 col-lg-4 d-flex flex-column gap-4">

            <div className="bg-white p-4 rounded-4 shadow-sm border">
              <h4 className="fw-bold mb-1">
                Hoje, {tituloDiaMes}
              </h4>
              <p className="text-muted small mb-4">
                3 itens na sua agenda
              </p>

              <div className="d-flex flex-column gap-4">
                <div className="d-flex gap-3 align-items-start">
                  <span
                    className="badge rounded-pill fw-medium py-2 px-3"
                    style={{ background: "#FFF2DF", color: "#B77935" }}
                  >
                    09:30
                  </span>

                  <div className="flex-grow-1">
                    <p className="fw-semibold mb-0">
                      Retorno com A. M.
                    </p>
                    <span className="text-muted small">
                      Videochamada • 45 min
                    </span>
                  </div>

                  <button className="btn btn-link text-muted p-0">
                    <i className="bi bi-three-dots"></i>
                  </button>
                </div>

                <div className="d-flex gap-3 align-items-start">
                  <span
                    className="badge rounded-pill fw-medium py-2 px-3"
                    style={{ background: "#EFF0FA", color: "#8589C7" }}
                  >
                    13:00
                  </span>

                  <div className="flex-grow-1">
                    <p className="fw-semibold mb-0">
                      Supervisão de equipe
                    </p>

                    <span className="text-muted small">
                      Sala 2 • 60 min
                    </span>
                  </div>

                  <button className="btn btn-link text-muted p-0">
                    <i className="bi bi-three-dots"></i>
                  </button>
                </div>

                <div className="d-flex gap-3 align-items-start">
                  <span className="badge rounded-pill fw-medium py-2 px-3 card-lt-hero">
                    16:30
                  </span>

                  <div className="flex-grow-1">
                    <p className="fw-semibold mb-0">
                      Acolhimento inicial
                    </p>
                    <span className="text-muted small">
                      Videochamada • 50 min
                    </span>
                  </div>

                  <button className="btn btn-link text-muted p-0">
                    <i className="bi bi-three-dots"></i>
                  </button>
                </div>

              </div>
            </div>

            <div className="bg-white p-4 rounded-4 shadow-sm border">
              <h4 className="fw-bold mb-1">Disponibilidade</h4>

              <p className="text-muted small mb-4">Horas abertas nesta semana</p>

              <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
                <span className="display-4 fw-bold lh-1 mb-0">
                  8h
                </span>

                <span className="badge rounded-pill fw-medium py-2 px-3" style={{ background: "#E8F5E9", color: "#2E7D32" }}>
                  +2h vs. semana passada
                </span>
              </div>

              <button className="btn btn-outline-secondary fw-semibold w-100 d-flex justify-content-center align-items-center gap-2">
                <i className="bi bi-clock"></i>
                Ajustar horários
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );

};

export default Agenda;