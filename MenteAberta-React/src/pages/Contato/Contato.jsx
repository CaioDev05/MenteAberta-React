import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './Contato.css'

const Contato = () => {

    const [dropdownAberto, setDropdownAberto] = useState(false);
    const [opcaoSelecionada, setOpcaoSelecionada] = useState("Selecione uma opção");

    const handleSelecionar = (opcao) => {
        setDropdownAberto(false);
        setOpcaoSelecionada(opcao);
    }

    return (
        <>
            <Header />
            <main>
                <section className="hero-section">
                    <div className="container px-4">
                        <div className="col-lg-7">
                            <div className="mb-3">
                                <span className="tag-fale-conosco fw-bold">FALE CONOSCO</span>
                            </div>

                            <h1 className="display-5 fw-bold text-dark mb-3">
                                Estamos aqui para ouvir você
                            </h1>

                            <p
                                className="lead text-secondary mb-0"
                                style={{ fontSize: '1.1rem' }}
                            >
                                Precisa de ajuda com agendamentos, quer tirar dúvidas sobre nossa
                                conduta ética ou propor parcerias? Envie sua mensagem.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="container px-4 pb-5">
                    <div className="row g-4">

                        <div className="col-lg-7">
                            <div className="content-box shadow-sm">
                                <h3 className="fw-bold mb-4">Envie sua Mensagem</h3>

                                <form>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="nome"
                                            className="form-label text-secondary fw-semibold"
                                            style={{ fontSize: '0.9rem' }}
                                        >
                                            Seu Nome (ou Codinome)
                                        </label>

                                        <input
                                            type="text"
                                            className="form-control form-control-custom"
                                            id="nome"
                                            placeholder="Ex: Maria Clara"
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label
                                            htmlFor="email"
                                            className="form-label text-secondary fw-semibold"
                                            style={{ fontSize: '0.9rem' }}
                                        >
                                            Seu E-mail
                                        </label>

                                        <input
                                            type="email"
                                            className="form-control form-control-custom"
                                            id="email"
                                            placeholder="Ex: maria@exemplo.com"
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label
                                            htmlFor="subject"
                                            className="form-label text-secondary fw-semibold"
                                            style={{ fontSize: '0.9rem' }}
                                        >
                                            Qual o Assunto principal?
                                        </label>

                                        <div className="col-12 col-md-auto position-relative">
                                            <button
                                                className="btn form-control-custom w-100 d-flex justify-content-between align-items-center"
                                                type="button"
                                                onClick={() => setDropdownAberto(!dropdownAberto)}
                                                style={{ minWidth: "180px", height: "46px" }}
                                            >
                                                {opcaoSelecionada}
                                                <i className="bi bi-chevron-down ms-2 fs-6"></i>
                                            </button>

                                            <ul
                                                className={`dropdown-menu w-100 shadow border-0 mt-2 p-2 rounded-4 ${dropdownAberto ? 'show d-block' : ''} dropdown-menu-style`}
                                                id="subject"
                                            >
                                                {["Selecione uma opção", "Dúvida sobre agendamento", "Elogio", "Reclamação"].map((opcao) => (
                                                    <li key={opcao}>
                                                        <button
                                                            className={`dropdown-item py-2 rounded-3 mb-1 ${opcaoSelecionada === opcao ? "active fw-medium" : ""}`}
                                                            onClick={() => handleSelecionar(opcao)}>
                                                            {opcao}
                                                        </button>
                                                    </li>
                                                )
                                                )
                                                }

                                            </ul>
                                        </div>

                                    </div>

                                    <div className="mb-4">
                                        <label
                                            htmlFor="mensagem"
                                            className="form-label text-secondary fw-semibold"
                                            style={{ fontSize: '0.9rem' }}
                                        >
                                            Escreva sua mensagem com detalhes
                                        </label>

                                        <textarea
                                            className="form-control form-control-custom"
                                            id="mensagem"
                                            rows="5"
                                            placeholder="Como podemos te ajudar hoje?"
                                            required
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary-custom w-100 fw-semibold"
                                    >
                                        Enviar Mensagem
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-5">

                            <div className="content-box shadow-sm mb-4">
                                <h4 className="fw-bold mb-4">Canais Oficiais</h4>

                                <div className="d-flex align-items-center mb-4">
                                    <div className="icon-circle me-3">
                                        <i className="bi bi-envelope-fill fs-5"></i>
                                    </div>

                                    <div>
                                        <span
                                            className="text-secondary d-block"
                                            style={{
                                                fontSize: '0.8rem',
                                                fontWeight: 600
                                            }}
                                        >
                                            E-MAIL DE CONTATO
                                        </span>

                                        <strong className="text-dark">
                                            contato@menteaberta.org
                                        </strong>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center">
                                    <div className="icon-circle me-3">
                                        <i className="bi bi-telephone-fill fs-5"></i>
                                    </div>

                                    <div>
                                        <span
                                            className="text-secondary d-block"
                                            style={{
                                                fontSize: '0.8rem',
                                                fontWeight: 600
                                            }}
                                        >
                                            SUPORTE TÉCNICO
                                        </span>

                                        <strong className="text-dark">
                                            Segunda a Sexta, 8h às 20h
                                        </strong>
                                    </div>
                                </div>
                            </div>

                            <div className="emergency-box shadow-sm">
                                <div className="d-flex align-items-center mb-3">
                                    <span className="emergency-icon-circle me-2"></span>

                                    <h4 className="fw-bold mb-0">
                                        Em caso de Emergência
                                    </h4>
                                </div>

                                <p
                                    className="text-secondary mb-4"
                                    style={{ fontSize: '0.9rem' }}
                                >
                                    Nossa plataforma realiza acolhimentos de apoio emocional agendados, não sendo
                                    indicada para crises imediatas. Se estiver passando por uma crise severa de saúde
                                    mental agora, utilize os canais abaixo de atendimento instantâneo gratuito:
                                </p>

                                <div className="d-flex align-items-center emergency-card-telephone p-3 mb-3">
                                    <span className="emergency-number me-3">
                                        188
                                    </span>

                                    <div>
                                        <strong className="text-dark d-block">
                                            CVV - Centro de Valorização da Vida
                                        </strong>

                                        <span
                                            className="text-secondary"
                                            style={{ fontSize: '0.8rem' }}
                                        >
                                            Ligação gratuita, confidencial • 24 Horas
                                        </span>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center emergency-card-telephone p-3">
                                    <span className="emergency-number me-3">
                                        192
                                    </span>

                                    <div>
                                        <strong className="text-dark d-block">
                                            SAMU - Urgência Médica
                                        </strong>

                                        <span
                                            className="text-secondary"
                                            style={{ fontSize: '0.8rem' }}
                                        >
                                            Ligação gratuita, ambulância de resgate
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Contato