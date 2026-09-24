import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import './FAQ.css'

const FAQ = () => {
    return (
        <>
            <Header />

            <main>
                <section className="hero-section">
                    <div className="container px-4 text-center d-flex justify-content-center align-items-center">
                        <div className="col-lg-6">
                            <div className="d-inline-flex align-items-center mb-3 card-lt-hero">
                                <span className="fw-semibold mb-0">FAQ MENTE SERENA</span>
                            </div>

                            <h1 className="display-5 fw-bold text-dark mb-3">
                                Perguntas Frequentes
                            </h1>

                            <p className="lead text-p">
                                Esclareça suas dúvidas gerais, técnicas e éticas sobre o funcionamento
                                das nossas consultas e acolhimentos voluntários.
                            </p>

                            <div className="input-group p-1 border rounded-pill bg-white shadow-sm">
                                <input
                                    type="text"
                                    className="form-control border-0 bg-transparent ps-3 my-auto"
                                    placeholder={'O que você gostaria de saber? Ex: "é anônimo?"'}
                                    aria-label="Buscar"
                                />

                                <button
                                    className="btn btn-search rounded-pill px-4 py-2"
                                    type="button"
                                >
                                    Buscar
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="">
                    <div className="container text-center justify-content-center align-items-center">
                        <div className="d-inline-flex flex-wrap gap-3 mb-4">
                            <button className="btn btn-category-active">Geral</button>
                            <button className="btn btn-category-inactive">Cadastro</button>
                            <button className="btn btn-category-inactive">Atendimento</button>
                            <button className="btn btn-category-inactive">Voluntário</button>
                            <button className="btn btn-category-inactive">Privacidade</button>
                        </div>
                    </div>
                </section>

                <section className="pt-5">
                    <div className="container px-4">
                        <div className="row justify-content-center">

                            <div
                                className="accordion col-lg-8 mb-4 p-0"
                                id="faqAccordion"
                            >

                                {/* PERGUNTA 1 */}
                                <div className="accordion-item mb-3 card-faq">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button
                                            className="accordion-button btn-faq"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne"
                                            aria-expanded="true"
                                            aria-controls="collapseOne"
                                        >
                                            <span className="fw-bold">
                                                Como funciona a plataforma?
                                            </span>
                                        </button>
                                    </h2>

                                    <div
                                        id="collapseOne"
                                        className="accordion-collapse collapse show"
                                        aria-labelledby="headingOne"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            <span className="lead text-p">
                                                A Mente Aberta é um espaço que conecta pessoas em sofrimento emocional
                                                a psicólogos e terapeutas qualificados de forma ágil e segura. Através
                                                da nossa busca, você escolhe o profissional ideal de acordo com a sua
                                                disponibilidade, faz o seu agendamento em segundos e recebe um link de
                                                sala virtual criptografada de ponta a ponta para realizar o
                                                atendimento por áudio e vídeo de forma rápida, privativa e humanizada.
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* PERGUNTA 2 */}
                                <div className="accordion-item mb-3 card-faq">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button
                                            className="accordion-button collapsed rounded"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo"
                                        >
                                            <span className="fw-bold">
                                                Os atendimentos são totalmente gratuitos?
                                            </span>
                                        </button>
                                    </h2>

                                    <div
                                        id="collapseTwo"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingTwo"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            <span className="lead text-p">
                                                Sim! Todos os atendimentos realizados através da plataforma são 100%
                                                gratuitos, oferecidos por uma rede de profissionais voluntários
                                                dedicados à saúde mental.
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* PERGUNTA 3 */}
                                <div className="accordion-item mb-3 card-faq">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button
                                            className="accordion-button collapsed rounded"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree"
                                            aria-expanded="false"
                                            aria-controls="collapseThree"
                                        >
                                            <span className="fw-bold">
                                                Como faço para me cadastrar como voluntário?
                                            </span>
                                        </button>
                                    </h2>

                                    <div
                                        id="collapseThree"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingThree"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            <span className="lead text-p">
                                                Basta acessar a área "Seja um Voluntário" no menu principal, preencher
                                                o formulário com seus dados básicos e enviar seu registro profissional
                                                (como o CRP) para a nossa equipe validar.
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* PERGUNTA 4 */}
                                <div className="accordion-item mb-3 card-faq">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button
                                            className="accordion-button collapsed rounded"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseFour"
                                            aria-expanded="false"
                                            aria-controls="collapseFour"
                                        >
                                            <span className="fw-bold">
                                                O site garante o anonimato dos usuários?
                                            </span>
                                        </button>
                                    </h2>

                                    <div
                                        id="collapseFour"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingFour"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            <span className="lead text-p">
                                                Sim. Levamos sua privacidade a sério. Solicitamos apenas as
                                                informações mínimas necessárias para o agendamento, e todas as
                                                consultas ocorrem em salas virtuais com criptografia de ponta a ponta.
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* PERGUNTA 5 */}
                                <div className="accordion-item mb-3 card-faq">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button
                                            className="accordion-button collapsed rounded"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseFive"
                                            aria-expanded="false"
                                            aria-controls="collapseFive"
                                        >
                                            <span className="fw-bold">
                                                Há atendimento para emergências psicológicas?
                                            </span>
                                        </button>
                                    </h2>

                                    <div
                                        id="collapseFive"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingFive"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            <span className="lead text-p">
                                                Não. A plataforma é focada em acolhimento e terapia breve. Em casos de
                                                crise aguda ou emergências de saúde, recomendamos entrar em contato
                                                imediatamente com o CVV (ligue 188) ou procurar o pronto-socorro mais
                                                próximo.
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* PERGUNTA 6 */}
                                <div className="accordion-item mb-3 card-faq">
                                    <h2 className="accordion-header" id="headingSix">
                                        <button
                                            className="accordion-button collapsed rounded"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseSix"
                                            aria-expanded="false"
                                            aria-controls="collapseSix"
                                        >
                                            <span className="fw-bold">
                                                Quanto tempo dura cada sessão?
                                            </span>
                                        </button>
                                    </h2>

                                    <div
                                        id="collapseSix"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingSix"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            <span className="lead text-p">
                                                Os atendimentos têm uma duração média padronizada de 40 a 50 minutos,
                                                tempo suficiente para um acolhimento eficaz e humanizado.
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* PERGUNTA 7 */}
                                <div className="accordion-item mb-3 card-faq">
                                    <h2 className="accordion-header" id="headingSeven">
                                        <button
                                            className="accordion-button collapsed rounded"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseSeven"
                                            aria-expanded="false"
                                            aria-controls="collapseSeven"
                                        >
                                            <span className="fw-bold">
                                                Posso escolher meu profissional de preferência?
                                            </span>
                                        </button>
                                    </h2>

                                    <div
                                        id="collapseSeven"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingSeven"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            <span className="lead text-p">
                                                Sim. Em nossa página de busca, você pode visualizar o perfil, a
                                                especialidade e a agenda de cada terapeuta, escolhendo aquele com o
                                                qual você mais se identifica.
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* PERGUNTA 8 */}
                                <div className="accordion-item mb-3 card-faq">
                                    <h2 className="accordion-header" id="headingEight">
                                        <button
                                            className="accordion-button collapsed rounded"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseEight"
                                            aria-expanded="false"
                                            aria-controls="collapseEight"
                                        >
                                            <span className="fw-bold">
                                                Como cancelo ou reagendo uma sessão marcada?
                                            </span>
                                        </button>
                                    </h2>

                                    <div
                                        id="collapseEight"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingEight"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            <span className="lead text-p">
                                                Acesse sua área pessoal no site, vá até "Meus Agendamentos" e
                                                selecione a opção desejada. Pedimos apenas que faça isso com, no
                                                mínimo, 24 horas de antecedência para liberar a vaga a outra pessoa.
                                            </span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-5 pb-5 bg-contact">
                    <div className="container px-4">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-8 card-contact text-center p-4 p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-12 col-lg-10">

                                        <h1 className="fw-bold text-white mb-3">
                                            Ainda tem alguma dúvida?
                                        </h1>

                                        <p className="text-white mb-4 opacity-90">
                                            Se você não encontrou a resposta que procurava, sinta-se à vontade para nos
                                            enviar uma mensagem direta. Estamos aqui para ajudar.
                                        </p>

                                        <Link
                                            to="/contato"
                                            className="btn btn-contact rounded-pill p-3 px-4"
                                        >
                                            Ir para Contato
                                        </Link>

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

export default FAQ