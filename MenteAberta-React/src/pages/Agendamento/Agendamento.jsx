import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import './Agendamento.css'

const Agendamento = () => {

    const meses = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ]

    const diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']

    const dataAtual = new Date()

    const [mesAtual, setMesAtual] = useState(dataAtual.getMonth())
    const [anoAtual, setAnoAtual] = useState(dataAtual.getFullYear())
    const [diaSelecionado, setDiaSelecionado] = useState(null)

    const [tipoAcolhimento, setTipoAcolhimento] = useState('individual')

    const primeiroDiaSemana = new Date(anoAtual, mesAtual, 1).getDay()
    const diasNoMes = new Date(anoAtual, mesAtual + 1, 0).getDate()

    const irMesAnterior = (e) => {
        e.preventDefault()

        if (mesAtual === 0) {
            setMesAtual(11)
            setAnoAtual(anoAtual - 1)
        } else {
            setMesAtual(mesAtual - 1)
        }
    }

    const irProximoMes = (e) => {
        e.preventDefault()

        if (mesAtual === 11) {
            setMesAtual(0)
            setAnoAtual(anoAtual + 1)
        } else {
            setMesAtual(mesAtual + 1)
        }
    }

    return (
        <>
            <Header />

            <main>
                <section className="hero-section mb-5">
                    <div
                        className="container px-4 py-4 rounded-4"
                        style={{ backgroundColor: '#E8EFEA' }}
                    >
                        <div className="row g-4 align-items-center">

                            <div className="col-lg-auto d-flex justify-content-center align-items-center">
                                <img
                                    src="Agendamento/pro-agendamento.png"
                                    alt="Dra. Helena Souza"
                                    className="img-fluid rounded-circle object-fit-cover"
                                    style={{
                                        width: '90px',
                                        height: '90px'
                                    }}
                                />
                            </div>

                            <div className="col-lg text-center text-lg-start">

                                <div className="d-flex align-items-center justify-content-center justify-content-lg-start mb-2">

                                    <div className="d-inline-flex align-items-center card-lt-hero p-0 me-3">
                                        <span
                                            className="fw-semibold mb-0 text-secondary"
                                            style={{ fontSize: '0.85rem' }}
                                        >
                                            PROFISSIONAL ESCOLHIDO
                                        </span>
                                    </div>

                                    <div className="d-flex align-items-center tag-star">
                                        <i className="bi bi-star me-1"></i>
                                        <span className="fw-bold">5.0</span>
                                    </div>

                                </div>

                                <h3 className="fw-bold mb-1">
                                    Dra. Helena Souza
                                </h3>

                                <span className="text-muted">
                                    Psicóloga voluntária • Especialista em
                                    Ansiedade e Luto • CRP 06/124589
                                </span>
                            </div>

                            <div className="col-lg-auto d-flex justify-content-center">
                                <a
                                    href="PaginaPerfilVoluntarios.html"
                                    className="btn btn-agendamento-outline rounded-pill px-4 py-2 fw-semibold"
                                >
                                    Escolher Outro
                                </a>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="container mb-5">
                    <div className="row g-5 justify-content-between">

                        <div className="col-lg-5">

                            <div className="content-box shadow-sm mb-4 p-4 rounded-4 border bg-white">

                                <div className="d-flex justify-content-between align-items-center mb-4">

                                    <span className="fw-bold fs-5">
                                        Selecione um Dia
                                    </span>

                                    <div className="d-flex align-items-center gap-3">

                                        <a
                                            className="text-decoration-none text-dark fw-bold"
                                            href="#"
                                            onClick={irMesAnterior}
                                        >
                                            &lt;
                                        </a>

                                        <span
                                            id="mes-ano-atual"
                                            className="fw-bold fs-6"
                                        >
                                            {meses[mesAtual]} de {anoAtual}
                                        </span>

                                        <a
                                            className="text-decoration-none text-dark fw-bold"
                                            href="#"
                                            onClick={irProximoMes}
                                        >
                                            &gt;
                                        </a>

                                    </div>
                                </div>

                                <div
                                    id="calendario-corpo"
                                    className="text-center text-muted"
                                >
                                    <div
                                        style={{
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(7, 1fr)',
                                            gap: '8px',
                                            alignItems: 'center',
                                            justifyItems: 'center'
                                        }}
                                    >

                                        {diasSemana.map((dia) => (
                                            <div
                                                key={dia}
                                                className="text-muted mb-2"
                                                style={{
                                                    fontSize: '0.85rem',
                                                    fontWeight: 500
                                                }}
                                            >
                                                {dia}
                                            </div>
                                        ))}

                                        {Array.from({ length: primeiroDiaSemana }).map((_, index) => (
                                            <div key={`vazio-${index}`}></div>
                                        ))}

                                        {Array.from({ length: diasNoMes }).map((_, index) => {

                                            const dia = index + 1

                                            const selecionado =
                                                diaSelecionado &&
                                                diaSelecionado.dia === dia &&
                                                diaSelecionado.mes === mesAtual &&
                                                diaSelecionado.ano === anoAtual

                                            return (
                                                <button
                                                    key={dia}
                                                    type="button"
                                                    className="btn border-0 rounded-3 d-flex align-items-center justify-content-center"
                                                    style={{
                                                        width: '36px',
                                                        height: '36px',
                                                        fontWeight: 500,
                                                        transition: '0.2s',
                                                        backgroundColor: selecionado
                                                            ? '#638B74'
                                                            : 'transparent',
                                                        color: selecionado
                                                            ? 'white'
                                                            : '#4A5568'
                                                    }}
                                                    onClick={() =>
                                                        setDiaSelecionado({
                                                            dia: dia,
                                                            mes: mesAtual,
                                                            ano: anoAtual
                                                        })
                                                    }
                                                    onMouseEnter={(e) => {
                                                        if (!selecionado) {
                                                            e.currentTarget.style.backgroundColor = '#E8EFEA'
                                                        }
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        if (!selecionado) {
                                                            e.currentTarget.style.backgroundColor = 'transparent'
                                                        }
                                                    }}
                                                >
                                                    {dia}
                                                </button>
                                            )
                                        })}

                                    </div>
                                </div>
                            </div>

                            {/* Box de Horários */}
                            <div className="content-box shadow-sm p-4 rounded-4 border bg-white">

                                <span className="fw-bold fs-5 d-block mb-4 text-center text-sm-start">
                                    Selecione um Horário Disponível
                                </span>

                                <div className="row justify-content-center justify-content-sm-start mx-0">
                                    <div className="col-12 col-xl-11 px-0">
                                        <div className="row g-2 g-md-3 justify-content-center justify-content-sm-start">

                                            <div className="col-6 col-sm-4 col-md-3">
                                                <button
                                                    type="button"
                                                    className="btn btn-horario-inactive w-100 rounded-4 border py-2 fw-bold"
                                                >
                                                    09:00
                                                </button>
                                            </div>

                                            <div className="col-6 col-sm-4 col-md-3">
                                                <button
                                                    type="button"
                                                    className="btn btn-horario-active w-100 rounded-4 border py-2 fw-bold"
                                                >
                                                    10:30
                                                </button>
                                            </div>

                                            <div className="col-6 col-sm-4 col-md-3">
                                                <button
                                                    type="button"
                                                    className="btn btn-horario-inactive w-100 rounded-4 border py-2 fw-bold"
                                                >
                                                    14:00
                                                </button>
                                            </div>

                                            <div className="col-6 col-sm-4 col-md-3">
                                                <button
                                                    type="button"
                                                    className="btn btn-horario-inactive w-100 rounded-4 border py-2 fw-bold"
                                                >
                                                    15:30
                                                </button>
                                            </div>

                                            <div className="col-6 col-sm-4 col-md-3">
                                                <button
                                                    type="button"
                                                    className="btn btn-horario-inactive w-100 rounded-4 border py-2 fw-bold"
                                                >
                                                    17:00
                                                </button>
                                            </div>

                                            <div className="col-6 col-sm-4 col-md-3">
                                                <button
                                                    type="button"
                                                    className="btn btn-horario-inactive w-100 rounded-4 border py-2 fw-bold"
                                                >
                                                    19:00
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5">

                            <div className="content-box shadow-sm p-4 rounded-4 border bg-white">

                                <h4 className="fw-bold text-center mb-4 mt-2">
                                    Preencha seus Dados
                                </h4>

                                <div className="mb-4">

                                    <p className="fw-semibold mb-3">
                                        Tipo de Acolhimento
                                    </p>

                                    <div className="d-flex gap-3">

                                        <button
                                            type="button"
                                            className={`btn rounded-3 py-3 w-50 d-flex align-items-center justify-content-center gap-2 ${
                                                tipoAcolhimento === 'individual'
                                                    ? 'btn-acolhimento-active'
                                                    : 'btn-acolhimento-inactive'
                                            }`}
                                            id="btn-individual"
                                            onClick={() => setTipoAcolhimento('individual')}
                                        >
                                            <i
                                                className={`bi ${
                                                    tipoAcolhimento === 'individual'
                                                        ? 'bi-circle-fill color-active'
                                                        : 'bi-circle color-inactive'
                                                }`}
                                                id="icon-individual"
                                            ></i>

                                            <span
                                                className={`fw-medium ${
                                                    tipoAcolhimento !== 'individual'
                                                        ? 'text-secondary'
                                                        : ''
                                                }`}
                                            >
                                                Individual
                                            </span>
                                        </button>

                                        <button
                                            type="button"
                                            className={`btn rounded-3 py-3 w-50 d-flex align-items-center justify-content-center gap-2 ${
                                                tipoAcolhimento === 'grupo'
                                                    ? 'btn-acolhimento-active'
                                                    : 'btn-acolhimento-inactive'
                                            }`}
                                            id="btn-grupo-apoio"
                                            onClick={() => setTipoAcolhimento('grupo')}
                                        >
                                            <i
                                                className={`bi ${
                                                    tipoAcolhimento === 'grupo'
                                                        ? 'bi-circle-fill color-active'
                                                        : 'bi-circle color-inactive'
                                                }`}
                                                id="icon-grupo-apoio"
                                            ></i>

                                            <span
                                                className={`fw-medium ${
                                                    tipoAcolhimento !== 'grupo'
                                                        ? 'text-secondary'
                                                        : ''
                                                }`}
                                            >
                                                Grupo de Apoio
                                            </span>
                                        </button>

                                    </div>
                                </div>

                                <div className="mb-4">

                                    <label
                                        htmlFor="mensagem"
                                        className="fw-semibold mb-2"
                                    >
                                        Como você está se sentindo? (Opcional)
                                    </label>

                                    <textarea
                                        className="form-control form-control-custom rounded-3 bg-white"
                                        id="mensagem"
                                        rows="4"
                                        placeholder="Escreva aqui brevemente se houver algo específico que queira compartilhar com o profissional antes do seu acolhimento..."
                                    ></textarea>

                                </div>

                                <div
                                    className="rounded-4 d-flex align-items-start p-3 mb-4 w-100"
                                    style={{ backgroundColor: '#F0F4FE' }}
                                >
                                    <i
                                        className="bi bi-shield-check me-3 fs-4"
                                        style={{ color: '#6C79C9' }}
                                    ></i>

                                    <div>
                                        <p
                                            className="fw-bold fs-6 mb-1"
                                            style={{ color: '#1a1a1a' }}
                                        >
                                            Ambiente 100% Confidencial
                                        </p>

                                        <p
                                            className="mb-0 text-muted"
                                            style={{ fontSize: '0.85rem' }}
                                        >
                                            Sua sessão acontecerá via chamada criptografada de ponta a ponta.
                                            Nenhum dado do atendimento é gravado ou compartilhado com terceiros.
                                        </p>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary-custom w-100 fw-bold py-3 rounded-3"
                                >
                                    Confirmar Agendamento
                                </button>

                            </div>
                        </div>

                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}

export default Agendamento