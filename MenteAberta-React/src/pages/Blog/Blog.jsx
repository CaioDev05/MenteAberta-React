import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './Blog.css'

const Blog = () => {
    return (
        <>
            <Header />
            <main>
                <section className="hero-section" style={{ backgroundColor: '#E8EFEA' }}>
                    <div className="container px-4">
                        <div className="col-lg-7">
                            <div className="d-inline-flex align-items-center mb-3 card-lt-hero">
                                <span className="fw-semibold mb-0">BLOG MENTE SERENA</span>
                            </div>

                            <h1 className="display-5 fw-bold text-dark mb-3">
                                Educação e Acolhimento em Palavras
                            </h1>

                            <p
                                className="lead text-secondary mb-0"
                                style={{ fontSize: '1.1rem' }}
                            >
                                Artigos profundos, dicas práticas de autocuidado e reflexões humanas escritas pelos nossos
                                profissionais voluntários.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="container px-4 pb-5 mt-5">
                    <div className="row g-4">

                        <div className="col-lg-8">
                            <h4 className="fw-bold mb-3 text-dark">
                                Destaque do Mês
                            </h4>

                            <div className="bg-white border rounded-4 shadow-sm p-3 p-md-4 mb-5 card-hover">
                                <div className="row g-4 align-items-center h-100">

                                    <div className="col-lg-5">
                                        <img
                                            src="../img/featured-photo.png"
                                            alt="Planta em vaso"
                                            className="w-100 h-100 object-fit-cover rounded-4"
                                            style={{ minHeight: '250px' }}
                                        />
                                    </div>

                                    <div className="col-lg-7 d-flex flex-column h-100 py-2">
                                        <div className="mb-2">
                                            <span className="tag-categoria">
                                                Ansiedade
                                            </span>
                                        </div>

                                        <h2
                                            className="fw-bold text-dark mb-3"
                                            style={{
                                                fontSize: '1.75rem',
                                                lineHeight: '1.2'
                                            }}
                                        >
                                            Como lidar com a ansiedade no cotidiano acelerado
                                        </h2>

                                        <p
                                            className="text-secondary mb-4"
                                            style={{
                                                fontSize: '1rem',
                                                lineHeight: '1.5'
                                            }}
                                        >
                                            Dicas práticas de respiração guiada, gerenciamento de estresse digital e
                                            pequenos rituais de ancoragem física que acalmam a mente em menos de 10
                                            minutos diários.
                                        </p>

                                        <div className="d-flex align-items-center justify-content-between mt-auto pt-3">
                                            <div className="d-flex align-items-center">

                                                <img
                                                    src="../img/Ellipse.png"
                                                    alt="Helena Souza"
                                                    className="rounded-circle me-3"
                                                    width="45"
                                                    height="45"
                                                    style={{ objectFit: 'cover' }}
                                                />

                                                <div className="d-flex flex-column">
                                                    <span
                                                        className="fw-bold text-dark"
                                                        style={{
                                                            fontSize: '0.95rem',
                                                            lineHeight: '1.2'
                                                        }}
                                                    >
                                                        Helena Souza
                                                    </span>

                                                    <span className="article-CRP">
                                                        CRP 06/124589
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="text-end">
                                                <span className="article-time">
                                                    Há 3 dias • 5 min de leitura
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <h4 className="fw-bold mb-3 text-dark">
                                Navegar por Categoria
                            </h4>

                            <div className="d-flex flex-wrap gap-2 mb-4">
                                <button className="btn btn-category-active">
                                    Todos
                                </button>

                                <button className="btn btn-category-inactive">
                                    Ansiedade
                                </button>

                                <button className="btn btn-category-inactive">
                                    Depressão
                                </button>

                                <button className="btn btn-category-inactive">
                                    Autocuidado
                                </button>

                                <button className="btn btn-category-inactive">
                                    Relacionamentos
                                </button>

                                <button className="btn btn-category-inactive">
                                    Mindfulness
                                </button>
                            </div>

                            <div className="row g-4 mb-5">

                                {/* Card 1 */}
                                <div className="col-12 col-md-6 col-lg-4 d-flex">
                                    <div className="bg-white border rounded-4 shadow-sm p-3 d-flex flex-column w-100 card-hover">

                                        <img
                                            src="../img/post-photo.png"
                                            alt="post1"
                                            className="w-100 rounded-3 mb-3 object-fit-cover"
                                            style={{ height: '140px' }}
                                        />

                                        <div className="mb-2">
                                            <span className="tag-categoria tag-blog">
                                                Relacionamentos
                                            </span>
                                        </div>

                                        <h6
                                            className="fw-bold mb-2"
                                            style={{
                                                fontSize: '1rem',
                                                lineHeight: '1.3'
                                            }}
                                        >
                                            Como estabelecer limites saudáveis nas relações cotidi...
                                        </h6>

                                        <p
                                            className="text-secondary mb-3 flex-grow-1"
                                            style={{
                                                fontSize: '0.85rem',
                                                lineHeight: '1.4'
                                            }}
                                        >
                                            Aprenda a dizer não com empatia e construa relacionamentos mais
                                            equilibrados e transparentes com ami...
                                        </p>

                                        {/* Rodapé do Card */}
                                        <div className="d-flex justify-content-between align-items-center mt-auto border-top pt-2">

                                            <div className="d-flex align-items-center">
                                                <img
                                                    src="../img/EllipseBlog1.png"
                                                    alt="Ana"
                                                    className="rounded-circle me-2"
                                                    width="24"
                                                    height="24"
                                                    style={{ objectFit: 'cover' }}
                                                />

                                                <span
                                                    className="fw-bold text-dark"
                                                    style={{ fontSize: '0.75rem' }}
                                                >
                                                    Ana Carolina
                                                </span>
                                            </div>

                                            <span
                                                className="text-secondary"
                                                style={{ fontSize: '0.7rem' }}
                                            >
                                                6 min de leitura
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Card 2 */}
                                <div className="col-12 col-md-6 col-lg-4 d-flex">
                                    <div className="bg-white border rounded-4 shadow-sm p-3 d-flex flex-column w-100 card-hover">

                                        <img
                                            src="../img/post-photo2.png"
                                            alt="post2"
                                            className="w-100 rounded-3 mb-3 object-fit-cover"
                                            style={{ height: '140px' }}
                                        />

                                        <div className="mb-2">
                                            <span className="tag-categoria tag-blog">
                                                Mindfulness
                                            </span>
                                        </div>

                                        <h6
                                            className="fw-bold mb-2"
                                            style={{
                                                fontSize: '1rem',
                                                lineHeight: '1.3'
                                            }}
                                        >
                                            Mindfulness para iniciantes: o poder de focar no presente
                                        </h6>

                                        <p
                                            className="text-secondary mb-3 flex-grow-1"
                                            style={{
                                                fontSize: '0.85rem',
                                                lineHeight: '1.4'
                                            }}
                                        >
                                            Um guia prático com cinco minutos diários de atenção plena para
                                            acalmar os fluxos de pensamentos estressant...
                                        </p>

                                        <div className="d-flex justify-content-between align-items-center mt-auto border-top pt-2">

                                            <div className="d-flex align-items-center">
                                                <img
                                                    src="../img/EllipseBlog2.png"
                                                    alt="Dr Roberto"
                                                    className="rounded-circle me-2"
                                                    width="24"
                                                    height="24"
                                                    style={{ objectFit: 'cover' }}
                                                />

                                                <span
                                                    className="fw-bold text-dark"
                                                    style={{ fontSize: '0.75rem' }}
                                                >
                                                    Dr. Roberto Mendes
                                                </span>
                                            </div>

                                            <span
                                                className="text-secondary"
                                                style={{ fontSize: '0.7rem' }}
                                            >
                                                8 min de leitura
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Card 3 */}
                                <div className="col-12 col-md-6 col-lg-4 d-flex">
                                    <div className="bg-white border rounded-4 shadow-sm p-3 d-flex flex-column w-100 card-hover">

                                        <img
                                            src="../img/post-photo3.png"
                                            alt="post3"
                                            className="w-100 rounded-3 mb-3 object-fit-cover"
                                            style={{ height: '140px' }}
                                        />

                                        <div className="mb-2">
                                            <span className="tag-categoria tag-blog">
                                                Autocuidado
                                            </span>
                                        </div>

                                        <h6
                                            className="fw-bold mb-2"
                                            style={{
                                                fontSize: '1rem',
                                                lineHeight: '1.3'
                                            }}
                                        >
                                            Como identificar os sinais silenciosos de burnout no tra...
                                        </h6>

                                        <p
                                            className="text-secondary mb-3 flex-grow-1"
                                            style={{
                                                fontSize: '0.85rem',
                                                lineHeight: '1.4'
                                            }}
                                        >
                                            Exaustão física extrema e distanciamento mental podem ser alertas.
                                            Descubra os limites ideais de d...
                                        </p>

                                        <div className="d-flex justify-content-between align-items-center mt-auto border-top pt-2">

                                            <div className="d-flex align-items-center">
                                                <img
                                                    src="../img/EllipseBlog3.png"
                                                    alt="Beatriz"
                                                    className="rounded-circle me-2"
                                                    width="24"
                                                    height="24"
                                                    style={{ objectFit: 'cover' }}
                                                />

                                                <span
                                                    className="fw-bold text-dark"
                                                    style={{ fontSize: '0.75rem' }}
                                                >
                                                    Beatriz Santos
                                                </span>
                                            </div>

                                            <span
                                                className="text-secondary"
                                                style={{ fontSize: '0.7rem' }}
                                            >
                                                5 min de leitura
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Card 4 */}
                                <div className="col-12 col-md-6 col-lg-4 d-flex">
                                    <div className="bg-white border rounded-4 shadow-sm p-3 d-flex flex-column w-100 card-hover">

                                        <img
                                            src="../img/post-photo4.png"
                                            alt="post4"
                                            className="w-100 rounded-3 mb-3 object-fit-cover"
                                            style={{ height: '140px' }}
                                        />

                                        <div className="mb-2">
                                            <span className="tag-categoria tag-blog">
                                                Autocuidado
                                            </span>
                                        </div>

                                        <h6
                                            className="fw-bold mb-2"
                                            style={{
                                                fontSize: '1rem',
                                                lineHeight: '1.3'
                                            }}
                                        >
                                            CA relação profunda entre rotina de sono e saúde mental
                                        </h6>

                                        <p
                                            className="text-secondary mb-3 flex-grow-1"
                                            style={{
                                                fontSize: '0.85rem',
                                                lineHeight: '1.4'
                                            }}
                                        >
                                            Dormir bem regula seus hormônios e melhora a ansiedade. Conheça a rotina
                                            ideal de higiene do sono.
                                        </p>

                                        <div className="d-flex justify-content-between align-items-center mt-auto border-top pt-2">

                                            <div className="d-flex align-items-center">
                                                <img
                                                    src="../img/EllipseBlog4.png"
                                                    alt="Dr. Marcos Silva"
                                                    className="rounded-circle me-2"
                                                    width="24"
                                                    height="24"
                                                    style={{ objectFit: 'cover' }}
                                                />

                                                <span
                                                    className="fw-bold text-dark"
                                                    style={{ fontSize: '0.75rem' }}
                                                >
                                                    Dr. Marcos Silva
                                                </span>
                                            </div>

                                            <span
                                                className="text-secondary"
                                                style={{ fontSize: '0.7rem' }}
                                            >
                                                7 min de leitura
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Card 5 */}
                                <div className="col-12 col-md-6 col-lg-4 d-flex">
                                    <div className="bg-white border rounded-4 shadow-sm p-3 d-flex flex-column w-100 card-hover">

                                        <img
                                            src="../img/post-photo5.png"
                                            alt="post5"
                                            className="w-100 rounded-3 mb-3 object-fit-cover"
                                            style={{ height: '140px' }}
                                        />

                                        <div className="mb-2">
                                            <span className="tag-categoria tag-blog">
                                                Depressão
                                            </span>
                                        </div>

                                        <h6
                                            className="fw-bold mb-2"
                                            style={{
                                                fontSize: '1rem',
                                                lineHeight: '1.3'
                                            }}
                                        >
                                            Compreendendo o luto: processos e o tempo de cada um
                                        </h6>

                                        <p
                                            className="text-secondary mb-3 flex-grow-1"
                                            style={{
                                                fontSize: '0.85rem',
                                                lineHeight: '1.4'
                                            }}
                                        >
                                            Não há fórmula mágica para superar a perda. Um olhar carinhoso e paciente
                                            sobre a dor de quem fica.
                                        </p>

                                        <div className="d-flex justify-content-between align-items-center mt-auto border-top pt-2">

                                            <div className="d-flex align-items-center">
                                                <img
                                                    src="../img/EllipseBlog5.png"
                                                    alt="Helena Souza"
                                                    className="rounded-circle me-2"
                                                    width="24"
                                                    height="24"
                                                    style={{ objectFit: 'cover' }}
                                                />

                                                <span
                                                    className="fw-bold text-dark"
                                                    style={{ fontSize: '0.75rem' }}
                                                >
                                                    Helena Souza
                                                </span>
                                            </div>

                                            <span
                                                className="text-secondary"
                                                style={{ fontSize: '0.7rem' }}
                                            >
                                                10 min de leitura
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Card 6 */}
                                <div className="col-12 col-md-6 col-lg-4 d-flex">
                                    <div className="bg-white border rounded-4 shadow-sm p-3 d-flex flex-column w-100 card-hover">

                                        <img
                                            src="../img/post-photo6.png"
                                            alt="post6"
                                            className="w-100 rounded-3 mb-3 object-fit-cover"
                                            style={{ height: '140px' }}
                                        />

                                        <div className="mb-2">
                                            <span className="tag-categoria tag-blog">
                                                Ansiedade
                                            </span>
                                        </div>

                                        <h6
                                            className="fw-bold mb-2"
                                            style={{
                                                fontSize: '1rem',
                                                lineHeight: '1.3'
                                            }}
                                        >
                                            Ansiedade social: desmistificando o medo de julgamento
                                        </h6>

                                        <p
                                            className="text-secondary mb-3 flex-grow-1"
                                            style={{
                                                fontSize: '0.85rem',
                                                lineHeight: '1.4'
                                            }}
                                        >
                                            Por que nos sentimos tão pressionados em público e como pequenos passos de
                                            exposição podem nos libertar.
                                        </p>

                                        <div className="d-flex justify-content-between align-items-center mt-auto border-top pt-2">

                                            <div className="d-flex align-items-center">
                                                <img
                                                    src="../img/EllipseBlog6.png"
                                                    alt="Clara Vasconcelos"
                                                    className="rounded-circle me-2"
                                                    width="24"
                                                    height="24"
                                                    style={{ objectFit: 'cover' }}
                                                />

                                                <span
                                                    className="fw-bold text-dark"
                                                    style={{ fontSize: '0.75rem' }}
                                                >
                                                    Clara Vasconcelos
                                                </span>
                                            </div>

                                            <span
                                                className="text-secondary"
                                                style={{ fontSize: '0.7rem' }}
                                            >
                                                6 min de leitura
                                            </span>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="d-flex justify-content-center mb-5">
                                <nav aria-label="Navegação do Blog">
                                    <ul className="pagination pagination-sm gap-2">

                                        <li className="page-item">
                                            <a
                                                className="page-link rounded-circle text-secondary border-0 btn-pagination-inactive"
                                                href="#"
                                            >
                                                <span
                                                    className="fw-bold"
                                                    style={{ color: '#2C3330' }}
                                                >
                                                    &lt;
                                                </span>
                                            </a>
                                        </li>

                                        <li className="page-item">
                                            <a
                                                className="page-link rounded-circle text-white border-0 btn-pagination-active"
                                                href="#"
                                            >
                                                1
                                            </a>
                                        </li>

                                        <li className="page-item">
                                            <a
                                                className="page-link rounded-circle text-secondary border-0 btn-pagination-inactive"
                                                href="#"
                                            >
                                                2
                                            </a>
                                        </li>

                                        <li className="page-item">
                                            <a
                                                className="page-link rounded-circle text-secondary border-0 btn-pagination-inactive"
                                                href="#"
                                            >
                                                3
                                            </a>
                                        </li>

                                        <li className="page-item">
                                            <a
                                                className="page-link rounded-circle text-secondary border-0 btn-pagination-inactive"
                                                href="#"
                                            >
                                                <span
                                                    className="fw-bold"
                                                    style={{ color: '#2C3330' }}
                                                >
                                                    &gt;
                                                </span>
                                            </a>
                                        </li>

                                    </ul>
                                </nav>
                            </div>
                        </div>

                        <div className="col-lg-4">

                            <div className="bg-white border rounded-4 shadow-sm p-4 mb-4">
                                <h5 className="fw-bold mb-3 text-dark">
                                    Buscar no Blog
                                </h5>

                                <input
                                    type="text"
                                    className="form-control form-control-custom w-100"
                                    style={{ backgroundColor: '#FAF7F2' }}
                                    id="blog"
                                    placeholder="Buscar artigo..."
                                />
                            </div>

                            <div className="bg-white border rounded-4 shadow-sm p-4 mb-4">
                                <h5 className="fw-bold mb-4 text-dark">
                                    Mais Lidos
                                </h5>

                                <div className="most-read-item mb-4">
                                    <span className="most-read-title">
                                        ANSIEDADE
                                    </span>

                                    <p className="fw-semibold">
                                        Como acalmar uma crise de ansiedade em 3 etapas
                                    </p>
                                </div>

                                <div className="most-read-item mb-4">
                                    <span className="most-read-title">
                                        APOIO
                                    </span>

                                    <p className="fw-semibold">
                                        Mitos comuns sobre começar a fazer terapia
                                    </p>
                                </div>

                                <div className="most-read-item">
                                    <span className="most-read-title">
                                        AUTOCUIDADO
                                    </span>

                                    <p className="fw-semibold">
                                        Importância do autocuidado na rotina diária
                                    </p>
                                </div>
                            </div>

                            <div
                                className="border rounded-4 shadow-sm p-4"
                                style={{ backgroundColor: '#6B8E7D' }}
                            >
                                <h3
                                    className="fw-bold mb-4"
                                    style={{
                                        color: '#FFFFFF',
                                        fontSize: '1.4rem'
                                    }}
                                >
                                    Receba Acolhimento na sua Caixa de Entrada
                                </h3>

                                <p
                                    className="mb-4"
                                    style={{
                                        color: '#E2EBE8',
                                        fontSize: '0.9rem'
                                    }}
                                >
                                    Inscreva-se e receba reflexões de terapeutas e artigos mensais sobre bem-estar e
                                    saúde mental.
                                </p>

                                <input
                                    type="email"
                                    className="form-control form-control-custom mb-3"
                                    id="email"
                                    placeholder="Seu melhor e-mail"
                                />

                                <button className="btn btn-email fw-semibold w-100 mb-2">
                                    Cadastrar gratuitamente
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

export default Blog