import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Voluntario = () => {
    return (
        <>
            <Header />

            <main>
                <section className="mb-4">
                    <div className="container px-4">
                        <h1 className="display-5 fw-bold text-dark mb-3">
                            Profissionais Voluntários Disponíveis
                        </h1>

                        <p
                            className="lead text-secondary mb-3"
                            style={{ fontSize: '1.1rem' }}
                        >
                            Encontre um psicólogo ou terapeuta disponível para o seu acolhimento de forma totalmente
                            gratuita.
                        </p>

                        <div className="input-group p-1 border rounded-pill bg-white shadow-sm">
                            <div className="row align-items-center m-1">
                                <i className="bi bi-search"></i>
                            </div>

                            <input
                                type="text"
                                className="form-control border-0 bg-transparent ps-3 my-auto"
                                placeholder="Buscar por nome, especialidade ou palavra-chave..."
                                aria-label="Buscar"
                            />

                            <button
                                className="btn btn-search rounded-pill px-4 py-2"
                                type="button"
                            >
                                Buscar Voluntário
                            </button>
                        </div>
                    </div>
                </section>

                <section className="container px-4 pb-5">
                    <div className="row g-4">

                        <div className="col-lg-3">
                            <div className="content-box shadow-sm mb-4">

                                <h4 className="fw-bold mb-4">
                                    Filtros Avançados
                                </h4>

                                <div className="mb-5">
                                    <p className="fw-bold">
                                        ESPECIALIZAÇÕES
                                    </p>

                                    {/* CheckBox 1 */}
                                    <div className="mb-3 form-check d-flex justify-content-between align-items-center w-100">
                                        <div className="d-flex align-items-center">
                                            <input
                                                type="checkbox"
                                                className="form-check-input form-check-input-custom me-2 mt-0"
                                                id="ck1"
                                            />

                                            <label
                                                htmlFor="ck1"
                                                className="form-check-label text-muted mb-0"
                                            >
                                                Ansiedade
                                            </label>
                                        </div>

                                        <span className="text-muted ms-2">
                                            420
                                        </span>
                                    </div>

                                    {/* CheckBox 2 */}
                                    <div className="mb-3 form-check d-flex justify-content-between align-items-center w-100">
                                        <div className="d-flex align-items-center">
                                            <input
                                                type="checkbox"
                                                className="form-check-input form-check-input-custom me-2 mt-0"
                                                id="ck2"
                                            />

                                            <label
                                                htmlFor="ck2"
                                                className="form-check-label text-muted mb-0"
                                            >
                                                Depressão
                                            </label>
                                        </div>

                                        <span className="text-muted ms-2">
                                            310
                                        </span>
                                    </div>

                                    {/* CheckBox 3 */}
                                    <div className="mb-3 form-check d-flex justify-content-between align-items-center w-100">
                                        <div className="d-flex align-items-center">
                                            <input
                                                type="checkbox"
                                                className="form-check-input form-check-input-custom me-2 mt-0"
                                                id="ck3"
                                            />

                                            <label
                                                htmlFor="ck3"
                                                className="form-check-label text-muted mb-0"
                                            >
                                                Luto e Perdas
                                            </label>
                                        </div>

                                        <span className="text-muted ms-2">
                                            180
                                        </span>
                                    </div>

                                    {/* CheckBox 4 */}
                                    <div className="mb-3 form-check d-flex justify-content-between align-items-center w-100">
                                        <div className="d-flex align-items-center">
                                            <input
                                                type="checkbox"
                                                className="form-check-input form-check-input-custom me-2 mt-0"
                                                id="ck4"
                                            />

                                            <label
                                                htmlFor="ck4"
                                                className="form-check-label text-muted mb-0"
                                            >
                                                Terapia de Casal
                                            </label>
                                        </div>

                                        <span className="text-muted ms-2">
                                            95
                                        </span>
                                    </div>

                                    {/* CheckBox 5 */}
                                    <div className="mb-3 form-check d-flex justify-content-between align-items-center w-100">
                                        <div className="d-flex align-items-center">
                                            <input
                                                type="checkbox"
                                                className="form-check-input form-check-input-custom me-2 mt-0"
                                                id="ck5"
                                            />

                                            <label
                                                htmlFor="ck5"
                                                className="form-check-label text-muted mb-0"
                                            >
                                                Estresse Pós-Traumático
                                            </label>
                                        </div>

                                        <span className="text-muted ms-2">
                                            64
                                        </span>
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <p className="fw-bold">
                                        DISPONIBILIDADE
                                    </p>

                                    {/* CheckBox 6 */}
                                    <div className="mb-3 form-check d-flex justify-content-between align-items-center w-100">
                                        <div className="d-flex align-items-center">
                                            <input
                                                type="checkbox"
                                                className="form-check-input form-check-input-custom me-2 mt-0"
                                                id="ck6"
                                            />

                                            <label
                                                htmlFor="ck6"
                                                className="form-check-label text-muted mb-0"
                                            >
                                                Qualquer Horário
                                            </label>
                                        </div>
                                    </div>

                                    {/* CheckBox 7 */}
                                    <div className="mb-3 form-check d-flex justify-content-between align-items-center w-100">
                                        <div className="d-flex align-items-center">
                                            <input
                                                type="checkbox"
                                                className="form-check-input form-check-input-custom me-2 mt-0"
                                                id="ck7"
                                            />

                                            <label
                                                htmlFor="ck7"
                                                className="form-check-label text-muted mb-0"
                                            >
                                                Manhã (08h - 12h)
                                            </label>
                                        </div>
                                    </div>

                                    {/* CheckBox 8 */}
                                    <div className="mb-3 form-check d-flex justify-content-between align-items-center w-100">
                                        <div className="d-flex align-items-center">
                                            <input
                                                type="checkbox"
                                                className="form-check-input form-check-input-custom me-2 mt-0"
                                                id="ck8"
                                            />

                                            <label
                                                htmlFor="ck8"
                                                className="form-check-label text-muted mb-0"
                                            >
                                                Tarde (12h - 18h)
                                            </label>
                                        </div>
                                    </div>

                                    {/* CheckBox 9 */}
                                    <div className="mb-3 form-check d-flex justify-content-between align-items-center w-100">
                                        <div className="d-flex align-items-center">
                                            <input
                                                type="checkbox"
                                                className="form-check-input form-check-input-custom me-2 mt-0"
                                                id="ck9"
                                            />

                                            <label
                                                htmlFor="ck9"
                                                className="form-check-label text-muted mb-0"
                                            >
                                                Noite (18h - 22h)
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <p className="fw-bold">
                                        IDIOMAS
                                    </p>

                                    {/* CheckBox 10 */}
                                    <div className="mb-3 form-check d-flex justify-content-between align-items-center w-100">
                                        <div className="d-flex align-items-center">
                                            <input
                                                type="checkbox"
                                                className="form-check-input form-check-input-custom me-2 mt-0"
                                                id="ck10"
                                            />

                                            <label
                                                htmlFor="ck10"
                                                className="form-check-label text-muted mb-0"
                                            >
                                                Português
                                            </label>
                                        </div>
                                    </div>

                                    {/* CheckBox 11 */}
                                    <div className="mb-3 form-check d-flex justify-content-between align-items-center w-100">
                                        <div className="d-flex align-items-center">
                                            <input
                                                type="checkbox"
                                                className="form-check-input form-check-input-custom me-2 mt-0"
                                                id="ck11"
                                            />

                                            <label
                                                htmlFor="ck11"
                                                className="form-check-label text-muted mb-0"
                                            >
                                                Libras
                                            </label>
                                        </div>
                                    </div>

                                    {/* CheckBox 12 */}
                                    <div className="mb-3 form-check d-flex justify-content-between align-items-center w-100">
                                        <div className="d-flex align-items-center">
                                            <input
                                                type="checkbox"
                                                className="form-check-input form-check-input-custom me-2 mt-0"
                                                id="ck12"
                                            />

                                            <label
                                                htmlFor="ck12"
                                                className="form-check-label text-muted mb-0"
                                            >
                                                Espanhol
                                            </label>
                                        </div>
                                    </div>

                                    {/* CheckBox 13 */}
                                    <div className="mb-3 form-check d-flex justify-content-between align-items-center w-100">
                                        <div className="d-flex align-items-center">
                                            <input
                                                type="checkbox"
                                                className="form-check-input form-check-input-custom me-2 mt-0"
                                                id="ck13"
                                            />

                                            <label
                                                htmlFor="ck13"
                                                className="form-check-label text-muted mb-0"
                                            >
                                                Inglês
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-9">

                            <div className="content-box shadow-sm mb-4 p-4 rounded-4 border">
                                <div className="row">

                                    <div className="col-12 col-md-3 d-flex flex-column align-items-center">
                                        <img
                                            src="Voluntario/pro-photo.png"
                                            alt="voluntario1"
                                            className="img-fluid mb-3"
                                            style={{
                                                objectFit: 'cover',
                                                maxWidth: '160px'
                                            }}
                                        />

                                        <div
                                            className="d-flex justify-content-center align-items-center fw-medium"
                                            style={{ color: '#489C6F' }}
                                        >
                                            <i
                                                className="bi bi-circle-fill"
                                                style={{ fontSize: '0.5rem' }}
                                            ></i>

                                            <span className="ms-2">
                                                Disponível hoje
                                            </span>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-9">

                                        <div className="d-flex justify-content-between align-items-start mb-2">
                                            <div>
                                                <h3 className="fw-bold mb-1">
                                                    Dr. Roberto Mendes
                                                </h3>

                                                <p className="text-muted mb-0">
                                                    Psicólogo Clínico • CRP 06/987541
                                                </p>
                                            </div>

                                            <div className="d-flex align-items-center px-3 py-1 tag-star rounded-4">
                                                <i className="bi bi-star me-2"></i>
                                                <span className="fw-semibold">
                                                    4.9
                                                </span>
                                            </div>
                                        </div>

                                        <p
                                            className="text-muted mb-3"
                                            style={{ lineHeight: '1.5' }}
                                        >
                                            Atuo há mais de 10 anos auxiliando pessoas a reestruturarem pensamentos
                                            diante do estresse cotidiano. Ofereço escuta empática e focada na solução
                                            de problemas emocionais.
                                        </p>

                                        <div className="d-flex gap-2 mb-4">
                                            <span className="tag-especializacao fw-bold px-2 py-1">
                                                Ansiedade
                                            </span>

                                            <span className="tag-especializacao fw-bold px-2 py-1">
                                                Depressão
                                            </span>

                                            <span className="tag-especializacao fw-bold px-2 py-1">
                                                TCC
                                            </span>
                                        </div>

                                        <div className="d-flex gap-3">
                                            <button className="btn btn-outline-secondary rounded-pill px-4 py-2 fw-semibold">
                                                Ver Perfil Completo
                                            </button>

                                            <a
                                                href="PaginaAgendamento.html"
                                                className="btn btn-success fw-semibold px-4 py-2"
                                            >
                                                Agendar Atendimento
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="content-box shadow-sm mb-4 p-4 rounded-4 border">
                                <div className="row">

                                    <div className="col-12 col-md-3 d-flex flex-column align-items-center">
                                        <img
                                            src="Voluntario/pro-photo2.png"
                                            alt="voluntario1"
                                            className="img-fluid mb-3"
                                            style={{
                                                objectFit: 'cover',
                                                maxWidth: '160px'
                                            }}
                                        />

                                        <div
                                            className="d-flex justify-content-center align-items-center fw-medium"
                                            style={{ color: '#489C6F' }}
                                        >
                                            <i
                                                className="bi bi-circle-fill"
                                                style={{ fontSize: '0.5rem' }}
                                            ></i>

                                            <span className="ms-2">
                                                Disponível hoje
                                            </span>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-9">

                                        <div className="d-flex justify-content-between align-items-start mb-2">
                                            <div>
                                                <h3 className="fw-bold mb-1">
                                                    Clara Vasconcelos
                                                </h3>

                                                <p className="text-muted mb-0">
                                                    Terapeuta Integrativa • CRP 06/987541
                                                </p>
                                            </div>

                                            <div className="d-flex align-items-center px-3 py-1 tag-star rounded-4">
                                                <i className="bi bi-star me-2"></i>
                                                <span className="fw-semibold">
                                                    5.0
                                                </span>
                                            </div>
                                        </div>

                                        <p
                                            className="text-muted mb-3"
                                            style={{ lineHeight: '1.5' }}
                                        >
                                            Acredito na abordagem holística e humana para cuidar do bem-estar.
                                            Ajudo pessoas a se reconectarem com suas essências em períodos de
                                            transição de carreira ou crises de identidade.
                                        </p>

                                        <div className="d-flex gap-2 mb-4">
                                            <span className="tag-especializacao fw-bold px-2 py-1">
                                                Autoconhecimento
                                            </span>

                                            <span className="tag-especializacao fw-bold px-2 py-1">
                                                Mindfulness
                                            </span>

                                            <span className="tag-especializacao fw-bold px-2 py-1">
                                                Meditação
                                            </span>
                                        </div>

                                        <div className="d-flex gap-3">
                                            <button className="btn btn-outline-secondary rounded-pill px-4 py-2 fw-semibold">
                                                Ver Perfil Completo
                                            </button>

                                            <a
                                                href="PaginaAgendamento.html"
                                                className="btn btn-success fw-semibold px-4 py-2"
                                            >
                                                Agendar Atendimento
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="content-box shadow-sm mb-4 p-4 rounded-4 border">
                                <div className="row">

                                    <div className="col-12 col-md-3 d-flex flex-column align-items-center">
                                        <img
                                            src="Voluntario/pro-photo3.png"
                                            alt="voluntario1"
                                            className="img-fluid mb-3"
                                            style={{
                                                objectFit: 'cover',
                                                maxWidth: '160px'
                                            }}
                                        />

                                        <div
                                            className="d-flex justify-content-center align-items-center fw-medium"
                                            style={{ color: '#489C6F' }}
                                        >
                                            <i
                                                className="bi bi-circle-fill"
                                                style={{ fontSize: '0.5rem' }}
                                            ></i>

                                            <span className="ms-2">
                                                Disponível hoje
                                            </span>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-9">

                                        <div className="d-flex justify-content-between align-items-start mb-2">
                                            <div>
                                                <h3 className="fw-bold mb-1">
                                                    Dra. Patrícia Albuquerque
                                                </h3>

                                                <p className="text-muted mb-0">
                                                    Psicanalista e Psicóloga • CRP 06/987541
                                                </p>
                                            </div>

                                            <div className="d-flex align-items-center px-3 py-1 tag-star rounded-4">
                                                <i className="bi bi-star me-2"></i>
                                                <span className="fw-semibold">
                                                    5.0
                                                </span>
                                            </div>
                                        </div>

                                        <p
                                            className="text-muted mb-3"
                                            style={{ lineHeight: '1.5' }}
                                        >
                                            Espaço dedicado a ouvir os dilemas mais profundos e inconscientes da
                                            nossa mente. Um acompanhamento acolhedor focado no acolhimento de perdas
                                            importantes e luto prolongado.
                                        </p>

                                        <div className="d-flex gap-2 mb-4">
                                            <span className="tag-especializacao fw-bold px-2 py-1">
                                                Luto e Separação
                                            </span>

                                            <span className="tag-especializacao fw-bold px-2 py-1">
                                                Terapia de Casal
                                            </span>
                                        </div>

                                        <div className="d-flex gap-3">
                                            <button className="btn btn-outline-secondary rounded-pill px-4 py-2 fw-semibold">
                                                Ver Perfil Completo
                                            </button>

                                            <a
                                                href="PaginaAgendamento.html"
                                                className="btn btn-success fw-semibold px-4 py-2"
                                            >
                                                Agendar Atendimento
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 4. Paginação */}
                            <div className="d-flex justify-content-center mb-5">
                                <nav aria-label="Navegação">
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
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}

export default Voluntario