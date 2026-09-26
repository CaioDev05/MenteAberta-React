import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
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

            <header
                className={`offcanvas-md offcanvas-start shadow-sm d-flex flex-column flex-shrink-0 p-3 ${isOpen ? 'show' : ''}`}
                style={{ width: "280px", zIndex: 1045 }}
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
                <ul className='nav nav-pills flex-column mb-auto gap-2 mt-2'>
                    <li className="nav-item">
                        <Link to="/" className="nav-link px-3 py-2 link-body-emphasis">
                            <span className="fw-medium">Agenda</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="nav-link px-3 py-2 link-body-emphasis">
                            <span className="fw-medium">Atividades</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="nav-link px-3 py-2 link-body-emphasis">
                            <span className="fw-medium">Tarefas</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="nav-link px-3 py-2 link-body-emphasis">
                            <span className="fw-medium">Blogs / Artigos</span>
                        </Link>
                    </li>
                </ul>

                <hr className="text-secondary opacity-25 mx-2" />

                {/* Botões de Ação */}
                <div className='d-flex flex-column gap-2 mt-2'>
                    <Link to="/" className="btn btn-success d-flex align-items-center justify-content-center gap-2 py-2 fw-semibold">
                        <i className="bi bi-gear-fill"></i> Configurações
                    </Link>
                    <Link to="/" className="btn btn-outline-secondary d-flex align-items-center justify-content-center gap-2 py-2 fw-semibold">
                        <i className="bi bi-box-arrow-right"></i> Log-out
                    </Link>
                </div>
            </header>
        </>
    );
}

export default Sidebar;