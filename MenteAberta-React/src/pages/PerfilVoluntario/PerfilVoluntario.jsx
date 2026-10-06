import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Configuracoes from './Configuracoes/Configuracoes';
import Footer from '../../components/Footer/Footer';
import Agenda from './Agenda/Agenda';
import Atividades from './Atividades/Atividades';
import Tarefas from './Tarefas/Tarefas';
import Artigos from './Artigos/Artigos';

const PerfilVoluntario = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [pagina, setPagina] = useState(5); // 1 - Agenda / 2 - Atividade / 3 - Tarefas / 4 - Blog / 5 - Configurações

    return (
        <>
            <div className='d-flex min-vh-100'>
                <aside className='shadow-sm' style={{ backgroundColor: "#F3F0EA", borderRight: "1px solid #DDE5E1" }}>
                    {/* Botão Hambúrguer (Mobile) - Fica fixo no topo esquerdo */}
                    <button
                        className="btn btn-success d-md-none position-fixed m-3 z-3 shadow-sm"
                        onClick={() => setIsOpen(true)}
                    >
                        <i className="bi bi-list fs-5"></i>
                    </button>

                    {/* Fundo escuro padrão do Bootstrap 5 (Backdrop) para mobile */}
                    {isOpen && (
                        <div
                            className="offcanvas-backdrop fade show d-md-none"
                            onClick={() => setIsOpen(false)}
                        ></div>
                    )}

                    <div
                        className={`offcanvas-md offcanvas-start d-flex flex-column flex-shrink-0 p-3 ${isOpen ? 'show' : ''}`}
                        style={{ width: "280px", zIndex: 1045, backgroundColor: "#F3F0EA", borderRight: "1px solid #DDE5E1" }}
                        tabIndex="-1"
                    >
                        {/* Botão de Fechar interno nativo (Aparece apenas no mobile) */}
                        <div className="d-flex justify-content-end d-md-none mb-2">
                            <button
                                type="button"
                                className="btn-close"
                                onClick={() => setIsOpen(false)}
                                aria-label="Close"
                            ></button>
                        </div>

                        {/* Logo e Título */}
                        <Link to="/" className="d-flex align-items-center justify-content-center link-dark link-body-emphasis text-decoration-none mb-4 gap-2">
                            <img src="logo-badge.png" alt="Logo" width="36" height="32" className="me-2"></img>
                            <span className="fs-4 fw-semibold">Mente Serena</span>
                        </Link>

                        {/* Perfil do Usuário */}
                        <div className='text-center mb-4'>
                            <div className="position-relative d-inline-block mb-2">
                                <img
                                    src="Voluntario/pro-photo.png"
                                    alt="Foto do usuário"
                                    width="60"
                                    height="60"
                                    className="rounded-circle shadow-sm"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <p className='mb-0 fw-bold text-dark fs-5'>Usuário</p>
                            <span className='card-desc'>
                                Especialização
                            </span>
                        </div>

                        <hr className="text-secondary opacity-25 mx-2" />

                        {/* Navegação */}
                        <ul className='nav nav-pills flex-column mb-auto gap-2 mt-2 w-100'>
                            <li className="nav-item w-100">
                                <button
                                    className={pagina === 1 ? "btn btn-success w-100 text-start d-flex align-items-center justify-content-start gap-2 px-3 py-2 fw-semibold" : "nav-link w-100 text-start px-3 py-2 link-body-emphasis d-flex align-items-center justify-content-start gap-2"}
                                    onClick={() => setPagina(1)}
                                >
                                    <i className="bi bi-calendar-event fs-5"></i>
                                    <span className="fw-medium text-nowrap">Agenda</span>
                                </button>
                            </li>
                            <li className="nav-item w-100">
                                <button
                                    className={pagina === 2 ? "btn btn-success w-100 text-start d-flex align-items-center justify-content-start gap-2 px-3 py-2 fw-semibold" : "nav-link w-100 text-start px-3 py-2 link-body-emphasis d-flex align-items-center justify-content-start gap-2"}
                                    onClick={() => setPagina(2)}
                                >
                                    <i className="bi bi-activity fs-5"></i>
                                    <span className="fw-medium text-nowrap">Atividades</span>
                                </button>
                            </li>
                            <li className="nav-item w-100">
                                <button
                                    className={pagina === 3 ? "btn btn-success w-100 text-start d-flex align-items-center justify-content-start gap-2 px-3 py-2 fw-semibold" : "nav-link w-100 text-start px-3 py-2 link-body-emphasis d-flex align-items-center justify-content-start gap-2"}
                                    onClick={() => setPagina(3)}
                                >
                                    <i className="bi bi-check-circle fs-5"></i>
                                    <span className="fw-medium text-nowrap">Tarefas</span>
                                </button>
                            </li>
                            <li className="nav-item w-100">
                                <button
                                    className={pagina === 4 ? "btn btn-success w-100 text-start d-flex align-items-center justify-content-start gap-2 px-3 py-2 fw-semibold" : "nav-link w-100 text-start px-3 py-2 link-body-emphasis d-flex align-items-center justify-content-start gap-2"}
                                    onClick={() => setPagina(4)}
                                >
                                    <i className="bi bi-journal-bookmark-fill fs-5"></i>
                                    <span className="fw-medium text-nowrap">Blogs / Artigos</span>
                                </button>
                            </li>
                            <li className="nav-item w-100">
                                <button
                                    className={pagina === 5 ? "btn btn-success w-100 text-start d-flex align-items-center justify-content-start gap-2 px-3 py-2 fw-semibold" : "nav-link w-100 text-start px-3 py-2 link-body-emphasis d-flex align-items-center justify-content-start gap-2"}
                                    onClick={() => setPagina(5)}
                                >
                                    <i className="bi bi-gear-fill fs-5"></i>
                                    <span className="fw-medium text-nowrap">Configurações</span>
                                </button>
                            </li>
                        </ul>

                        {/* Box de Apoio */}
                        <div className='content-box px-3 py-3 my-3 rounded-sm' style={{ background: "#E6EFEA" }}>
                            <div className='d-flex gap-2 align-items-center mb-1'>
                                <i className="bi bi-chat-heart fs-5" style={{ color: "#527466" }}></i>
                                <span className="fw-semibold" style={{ color: "#527466" }}>Precisa de apoio?</span>
                            </div>
                            <span style={{ color: "#6F7A75", fontSize: "0.9em" }}>A coordenação está disponível para orientar você.</span>
                        </div>

                        {/* Botão Sair */}
                        <Link to="/" className="btn rounded-pill border bg-white px-4 py-2 mt-auto fw-semibold d-flex justify-content-start align-items-center gap-2 w-100 text-start">
                            <i className="bi bi-box-arrow-right fs-5"></i> Sair
                        </Link>
                    </div>
                </aside>

                <main className='flex-grow-1 w-100'>
                    {pagina === 1 && (<Agenda />)}
                    {pagina === 2 && (<Atividades />)}
                    {pagina === 3 && (<Tarefas />)}
                    {pagina === 4 && (<Artigos />)}
                    {pagina === 5 && (<Configuracoes />)}
                </main>
            </div>
            <Footer />
        </>
    )
}

export default PerfilVoluntario