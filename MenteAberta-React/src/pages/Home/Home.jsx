import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <div className="container px-4 py-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">

                        <div className="col-12 col-sm-10 col-lg-6 mx-auto">
                            <img
                                src="Peace of mind-bro.png"
                                className="d-block mx-lg-auto img-fluid"
                                alt="Ilustração de Paz Mental"
                                width="700"
                                height="500"
                                loading="lazy"
                            />
                        </div>

                        <div className="col-lg-6 text-center text-lg-start">
                            <div className="d-inline-flex align-items-center mb-3 card-lt-hero">
                                <span className="fw-semibold mb-0">Apoio Emocional Gratuíto</span>
                            </div>

                            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-4">
                                Sua saúde mental importa. Encontre apoio hoje.
                            </h1>

                            <p className="lead mb-4 text-p">
                                Conectamos você de forma segura e anônima a psicólogos e terapeutas voluntários prontos para te
                                ouvir e acolher, sem custo algum.
                            </p>

                            <div className="d-grid gap-3 d-md-flex justify-content-center justify-content-lg-start">
                                <Link
                                    to="/login"
                                    className="btn btn-success btn-lg px-4 fw-semibold d-inline-flex align-items-center justify-content-center"
                                >
                                    Preciso de Ajuda
                                    <i className="bi bi-arrow-right ms-2"></i>
                                </Link>

                                <Link
                                    to="/login"
                                    className="btn btn-outline-secondary btn-lg px-4 fw-semibold"
                                >
                                    Quero ser Voluntário
                                    <i className="bi bi-arrow-right ms-2"></i>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>

                <section className="bg-grid">
                    <div className="container px-4 py-5">
                        <div className="row flex-lg-row align-items-center g-4 py-5">

                            <div className="col-12 col-lg-4">
                                <div className="bg-grid-div h-100 min-height-200 card-hover shadow-sm">
                                    <h4 className="fw-bold text-numbers mb-3">1.200+</h4>
                                    <p className="mb-2 fw-bold text-dark fs-5">Psicólogos Voluntários</p>
                                    <p className="text-p mb-0 small">Profissionais devidamente registrados no CFP</p>
                                </div>
                            </div>

                            <div className="col-12 col-lg-4">
                                <div className="bg-grid-div h-100 min-height-200 card-hover shadow-sm">
                                    <h4 className="fw-bold text-numbers mb-3">45.000+</h4>
                                    <p className="mb-2 fw-bold text-dark fs-5">Acolhimentos Realizados</p>
                                    <p className="text-p mb-0 small">Conversas virtuais e sessões gratuitas finalizadas</p>
                                </div>
                            </div>

                            <div className="col-12 col-lg-4">
                                <div className="bg-grid-div h-100 min-height-200 card-hover shadow-sm">
                                    <h4 className="fw-bold text-numbers mb-3">15.000+</h4>
                                    <p className="mb-2 fw-bold text-dark fs-5">Vidas Transformadas</p>
                                    <p className="text-p mb-0 small">Pessoas acolhidas em momentos de crise emocional</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="bg-mission">
                    <div className="container px-4 py-5">
                        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">

                            <div className="col-lg-6 text-center text-lg-start">
                                <div className="d-inline-flex align-items-center mb-3 card-lt">
                                    <span className="fw-semibold mb-0">Nossa Missão</span>
                                </div>

                                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-4">
                                    Acreditamos que a terapia deve ser acessível e humanizada
                                </h1>

                                <p className="lead mb-4 text-p">
                                    Na Mente Serena, desmistificamos o cuidado com a saúde mental. Unimos ciência, empatia e
                                    tecnologia para conectar você aos melhores caminhos de cura, autoconhecimento e
                                    desenvolvimento emocional.
                                </p>

                                <div className="d-flex justify-content-center justify-content-lg-start">
                                    <ul className="list-unstyled text-p text-start">
                                        <li className="mb-2">
                                            <i className="bi bi-check-circle-fill text-success me-2"></i>
                                            Consultas 100% online ou presenciais, no seu tempo
                                        </li>

                                        <li className="mb-2">
                                            <i className="bi bi-check-circle-fill text-success me-2"></i>
                                            Profissionais selecionados sob rigorosos critérios éticos
                                        </li>

                                        <li className="mb-2">
                                            <i className="bi bi-check-circle-fill text-success me-2"></i>
                                            Programas complementares de meditação guiada e escrita terapêutica
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Imagem */}
                            <div className="col-12 col-sm-10 col-lg-6 mx-auto">
                                <img
                                    src="Overwhelmed-amico.png"
                                    className="d-block mx-lg-auto img-fluid"
                                    alt="Ilustração de Paz Mental"
                                    width="700"
                                    height="500"
                                    loading="lazy"
                                />
                            </div>

                        </div>
                    </div>
                </section>

                <section className="bg-importancia">
                    <div className="container px-4 py-5">
                        <div className="row flex-lg-row align-items-center g-5 py-5">

                            <div className="col-lg-6 text-center text-lg-start">
                                <div className="d-inline-flex align-items-center mb-3 card-lt">
                                    <span className="fw-semibold mb-0">A IMPORTÂNCIA DO ACOLHIMENTO</span>
                                </div>

                                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-4">
                                    O apoio psicológico é um pilar essencial para a saúde mental.
                                </h1>

                                <p className="lead mb-4 text-p">
                                    Em momentos de crise, a escuta empática e o apoio psicológico podem ser transformadores.
                                    Nosso objetivo é oferecer um espaço seguro, onde você possa expressar suas emoções sem
                                    julgamentos e receber orientação profissional.
                                </p>
                            </div>

                            <div className="col-lg-6 mx-auto">
                                <div className="row justify-content-center">

                                    {/* Card 1 */}
                                    <div className="col-12 col-sm-5 bg-importancia-card min-height-200 card-hover shadow-sm">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="icon-wrapper me-1">
                                                <i className="bi bi-person-up fs-5"></i>
                                            </div>

                                            <h3 className="mb-0 fw-bold text-dark fs-5">
                                                Autoconhecimento
                                            </h3>
                                        </div>

                                        <p className="card-desc">
                                            Compreenda suas emoções e descubra seu verdadeiro potencial interno.
                                        </p>
                                    </div>

                                    {/* Card 2 */}
                                    <div className="col-12 col-sm-5 bg-importancia-card min-height-200 card-hover shadow-sm">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="icon-wrapper me-3">
                                                <i className="bi bi-shield-check fs-5"></i>
                                            </div>

                                            <h3 className="mb-0 fw-bold text-dark fs-5">
                                                Resiliência
                                            </h3>
                                        </div>

                                        <p className="card-desc">
                                            Desenvolva força emocional para superar os desafios diários da vida.
                                        </p>
                                    </div>

                                </div>

                                <div className="row justify-content-center">

                                    {/* Card 3 */}
                                    <div className="col-12 col-sm-5 bg-importancia-card min-height-200 card-hover shadow-sm">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="icon-wrapper me-3">
                                                <i className="bi bi-people fs-5"></i>
                                            </div>

                                            <h3 className="mb-0 fw-bold text-dark fs-5">
                                                Conexões Saudáveis
                                            </h3>
                                        </div>

                                        <p className="card-desc">
                                            Construa relacionamentos mais fortes baseados no respeito e empatia.
                                        </p>
                                    </div>

                                    {/* Card 4 */}
                                    <div className="col-12 col-sm-5 bg-importancia-card min-height-200 card-hover shadow-sm">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="icon-wrapper me-3">
                                                <i className="bi bi-heart-pulse fs-5"></i>
                                            </div>

                                            <h3 className="mb-0 fw-bold text-dark fs-5">
                                                Bem-Estar Contínuo
                                            </h3>
                                        </div>

                                        <p className="card-desc">
                                            Mantenha o equilíbrio mental e a paz interior na sua rotina.
                                        </p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section>
                    <div className="container px-4 py-5">

                        <div className="text-center mb-5">
                            <div className="d-inline-flex align-items-center mb-3 badge-passo">
                                <span className="fw-semibold mb-0">PASSO A PASSO</span>
                            </div>

                            <h2
                                className="fw-bold text-center mb-3"
                                style={{ color: '#1a2332' }}
                            >
                                Como Funciona o Mente Aberta
                            </h2>

                            <p
                                className="text-center text-p mx-auto"
                                style={{ maxWidth: '650px' }}
                            >
                                Em apenas três etapas simples você consegue agendar um atendimento acolhedor com total
                                privacidade.
                            </p>
                        </div>

                        <div className="row align-items-stretch g-4 pb-5">

                            {/* Passo 1 */}
                            <div className="col-12 col-lg-4">
                                <div className="step-card h-100">
                                    <div className="circle-number">01</div>

                                    <h5
                                        className="fw-bold mb-3"
                                        style={{ color: '#1a2332' }}
                                    >
                                        Cadastra-se
                                    </h5>

                                    <p className="text-p mb-0 small">
                                        Crie sua conta em segundos de forma segura e escolha um codinome se preferir manter o anonimato.
                                    </p>
                                </div>
                            </div>

                            {/* Passo 2 */}
                            <div className="col-12 col-lg-4">
                                <div className="step-card h-100">
                                    <div className="circle-number">02</div>

                                    <h5
                                        className="fw-bold mb-3"
                                        style={{ color: '#1a2332' }}
                                    >
                                        Escolha um Profissional
                                    </h5>

                                    <p className="text-p mb-0 small">
                                        Filtre nossa lista de voluntários por especialidade,
                                        disponibilidade e agende de forma simples.
                                    </p>
                                </div>
                            </div>

                            {/* Passo 3 */}
                            <div className="col-12 col-lg-4">
                                <div className="step-card h-100">
                                    <div className="circle-number">03</div>

                                    <h5
                                        className="fw-bold mb-3"
                                        style={{ color: '#1a2332' }}
                                    >
                                        Inicie o Acolhimento
                                    </h5>

                                    <p className="text-p mb-0 small">
                                        No dia e hora agendados, entre na sala de atendimento virtual
                                        segura para conversar com privacidade.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="bg-atende-voluntario">
                    <div className="container px-4 py-5">
                        <div className="text-center m-3 m-md-5">

                            <h1
                                className="fw-bold text-center mb-4"
                                style={{ color: '#FFF' }}
                            >
                                Você não precisa carregar o <br className="d-none d-md-block" />
                                mundo inteiro sozinho.
                            </h1>

                            <p
                                className="text-center text-p mx-auto mb-4"
                                style={{
                                    maxWidth: '650px',
                                    color: '#FFF'
                                }}
                            >
                                O primeiro passo é sempre o mais corajoso. Permita-se receber a escuta
                                <br className="d-none d-md-block" />
                                acolhedora de um voluntário qualificado hoje.
                            </p>

                            <Link to="/agendamento" className="btn btn-agendar btn-lg px-4 fw-semibold mt-3 d-block d-md-inline-block">
                                Agendar Meu Atendimento
                                <i className="bi bi-arrow-right ms-2"></i>
                            </Link>
                            <Link to="/login" className="btn btn-voluntario btn-lg px-4 fw-semibold mt-3 d-block d-md-inline-block ms-3">
                                Quero ser Voluntário
                                <i className="bi bi-arrow-right ms-2"></i>
                            </Link>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </>
    )
}

export default Home