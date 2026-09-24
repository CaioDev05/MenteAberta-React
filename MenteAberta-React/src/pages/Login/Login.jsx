import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './Login.css'

const Login = () => {

    const [senhaVisivel, setSenhaVisivel] = useState(false)

    const [login, setLogin] = useState(false)
    const [tipoUsuario, setTipoUsuario] = useState("usuario")

    return (
        <>
            <Header />

            <main className="bg-section">
                <section>
                    <div className="container px-4 py-5">
                        <div className="row flex-lg-reverse align-items-center g-5 py-5">

                            <div className="col-12 col-lg-6 mx-auto pe-lg-5">
                                <div className="mb-4">
                                    <span className="badge-welcome text-uppercase">
                                        Seja Bem-vindo(a)
                                    </span>
                                </div>

                                <h1
                                    className="display-4 fw-bolder text-body-emphasis lh-1 mb-4"
                                    style={{ color: '#2A332F' }}
                                >
                                    Damos as boas-vindas ao seu espaço seguro de acolhimento.
                                </h1>

                                <p
                                    className="lead mb-5 text-muted"
                                    style={{ fontSize: '1.1rem' }}
                                >
                                    Lembre-se: sua privacidade é sagrada. Todos os nossos atendimentos respeitam
                                    rigorosamente o sigilo profissional de acordo com a ética da psicologia.
                                </p>

                                <div
                                    className="rounded-4 p-4"
                                    style={{
                                        backgroundColor: '#F0F4F8',
                                        color: '#4A5568'
                                    }}
                                >
                                    <p
                                        className="mb-3"
                                        style={{ fontSize: '0.95rem' }}
                                    >
                                        "Olhar para dentro de si e pedir ajuda é o passo mais generoso que você pode dar
                                        em direção ao seu próprio futuro."
                                    </p>

                                    <p
                                        className="mb-0 fw-bold"
                                        style={{
                                            fontSize: '0.85rem',
                                            color: '#2A332F'
                                        }}
                                    >
                                        — MENTE SERENA
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div
                                    className="bg-login mx-auto w-100"
                                    style={{ maxWidth: '500px' }}
                                >
                                    {/* Toggle Cadastro / Login */}
                                    <div className="toggle-container mb-4">
                                        <button
                                            type="button"
                                            className={`flex-grow-1 toggle-btn ${!login ? "active" : ""}`}
                                            id="btn-cadastro"
                                            onClick={() => { setLogin(false) }}
                                        >
                                            Cadastro
                                        </button>

                                        <button
                                            type="button"
                                            className={`flex-grow-1 toggle-btn ${login ? "active" : ""}`}
                                            id="btn-login"
                                            onClick={() => { setLogin(true) }}
                                        >
                                            Login
                                        </button>
                                    </div>

                                    {/* Toggle Tipo de Usuário */}
                                    {!login && (

                                        <span id="toggle-tipo-usuario">
                                            <label
                                                className="form-label fw-semibold"
                                                style={{ fontSize: '0.9rem' }}
                                            >
                                                Quero me cadastrar como:
                                            </label>

                                            <div className="toggle-container mb-4">
                                                <button
                                                    type="button"
                                                    className={`flex-grow-1 toggle-btn toggle-btn-role ${tipoUsuario === "usuario" ? "active" : "text-muted"}`}
                                                    style={{ fontSize: '0.85rem' }}
                                                    id="btnUsuario"
                                                    onClick={() => { setTipoUsuario("usuario") }}
                                                >
                                                    Usuário (Buscando Ajuda)
                                                </button>

                                                <button
                                                    type="button"
                                                    className={`flex-grow-1 toggle-btn toggle-btn-role ${tipoUsuario === "voluntario" ? "active" : "text-muted"}`}
                                                    style={{ fontSize: '0.85rem' }}
                                                    id="btnVoluntario"
                                                    onClick={() => { setTipoUsuario("voluntario") }}
                                                >
                                                    Voluntário (Psicólogo/Terapeuta)
                                                </button>
                                            </div>
                                        </span>
                                    )}


                                    <form id="mainForm">

                                        {/* Campo Nome (Fica invisível no Login) */}
                                        {!login && (
                                            <div className="mb-3" id="box-nome">
                                                <label
                                                    htmlFor="nome"
                                                    className="form-label"
                                                    style={{ fontSize: '0.9rem' }}
                                                >
                                                    Nome Completo (ou Codinome)
                                                </label>

                                                <input
                                                    type="text"
                                                    className="form-control form-control-custom"
                                                    id="nome"
                                                    placeholder="Ex: Maria da Silva"
                                                    required
                                                />
                                            </div>)}


                                        {/* Campo Email (Sempre Visível) */}
                                        <div className="mb-3">
                                            <label
                                                htmlFor="email"
                                                className="form-label"
                                                style={{ fontSize: '0.9rem' }}
                                            >
                                                Endereço de E-mail
                                            </label>

                                            <input
                                                type="email"
                                                className="form-control form-control-custom"
                                                id="email"
                                                placeholder="maria@exemplo.com"
                                                required
                                            />
                                        </div>

                                        {/* Campo CRP (Aparece apenas no Cadastro de Voluntário) */}
                                        {tipoUsuario === "voluntario" && (
                                            <div
                                                className="mb-3"
                                                id="box-crp"
                                            >
                                                <label
                                                    htmlFor="crp"
                                                    className="form-label"
                                                    style={{ fontSize: '0.9rem' }}
                                                >
                                                    CRP
                                                </label>

                                                <input
                                                    type="text"
                                                    className="form-control form-control-custom"
                                                    id="crp"
                                                    placeholder="Ex: CRP 06/124589"
                                                />
                                            </div>
                                        )}

                                        {/* Campo Senha (Sempre Visível) */}
                                        <div className="mb-4">
                                            <label
                                                htmlFor="senha"
                                                className="form-label"
                                                style={{ fontSize: '0.9rem' }}
                                            >
                                                Senha Secreta
                                            </label>

                                            <div className="input-group input-group-password">
                                                <input
                                                    type={!senhaVisivel ? "password" : "text"}
                                                    className="form-control form-control-custom"
                                                    id="senha"
                                                    placeholder="••••••••••••"
                                                    required
                                                />

                                                <span
                                                    className="input-group-text"
                                                    id="btn-password-visible"
                                                >
                                                    <i
                                                        className="bi bi-eye-slash"
                                                        id="icon-password-visible"
                                                        onClick={() => {setSenhaVisivel(!senhaVisivel)}}
                                                    ></i>
                                                </span>
                                            </div>
                                        </div>

                                        {/* Checkbox Termos (Fica invisível no Login) */}
                                        {!login && (
                                            <div
                                                className="mb-4 form-check d-flex align-items-start"
                                                id="box-termos"
                                            >
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input form-check-input-custom mt-1 me-2"
                                                    id="termos"
                                                    required
                                                />

                                                <label
                                                    className="form-check-label text-muted"
                                                    htmlFor="termos"
                                                    style={{
                                                        fontSize: '0.85rem',
                                                        lineHeight: '1.4'
                                                    }}
                                                >
                                                    Li e aceito os Termos de Uso e o compromisso ético de
                                                    confidencialidade da plataforma Mente Aberta.
                                                </label>
                                            </div>)}


                                        {/* Botão Submit */}
                                        <button
                                            type="submit"
                                            className="btn btn-primary-custom w-100 fw-semibold mb-4"
                                            id="btn-submit"
                                        >
                                            {!login ? "Criar Minha Conta Gratuita" : "Entrar na Minha Conta"}
                                            
                                        </button>

                                    </form>
                                    
                                    <div className="text-center">
                                        <p
                                            className="text-muted mb-3"
                                            style={{
                                                fontSize: '0.75rem',
                                                fontWeight: 600
                                            }}
                                            id="text-social-media"
                                        >
                                            {!login ? "OU CADASTRE-SE COM" : "OU FAÇA LOGIN COM"}
                                        </p>

                                        <div className="row gx-3">
                                            <div className="col-6">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-social w-100 d-flex justify-content-center align-items-center"
                                                >
                                                    <i className="bi bi-google me-2 fs-5"></i>
                                                    Google
                                                </button>
                                            </div>

                                            <div className="col-6">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-social w-100 d-flex justify-content-center align-items-center"
                                                >
                                                    <i className="bi bi-facebook me-2 fs-5"></i>
                                                    Facebook
                                                </button>
                                            </div>
                                        </div>
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

export default Login