import AbstractView from "./AbstractView.js"
import NovoPaciente from "./NovoPaciente/NovoPaciente.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Pacientes");

        this.img_modelo = "https://img.ibxk.com.br/2017/03/31/31153357416387.jpg?w=328"
    }


    async getEjs() {
        return `


        <div class="main">
            <div class="main_top_bar">
                <div class="top_bar_toggle" id="menuButton">
                    <span class="material-icons">menu</span>
                </div>
                <div class="top_bar_reference">
                    Pacientes
                </div>
                <div class="top_bar_icon">
                    <span class="material-icons">psychology</span>
                </div>

            </div>

            <div id="first__accordion__paciente" class="accordion__paciente">
                <div class="box__paciente__header">
                    <div class="box_paciente_left_side">
                        <div class="paciente_img"><img src=${this.img_modelo}></div>
                        <span class="pacinte_nome">Fellipe Lorram</span>
                    </div>
                    <div id="box__paciente__header-presencial">Presencial</div>
                    <div id="box_paciente_center-first" class="box_paciente_center">
                        <span>Segundas</span>
                        <span>16:00</span>
                    </div>
                    <div id="box_paciente_center-second" class="box_paciente_center">
                        <div class="ativo_inativo"></div>
                        <span class="ativo_inativo_text">Ativo</span>
                    </div>
                    <div class="box_paciente_left_right">
                        <span class="material-icons">expand_more</span>
                    </div>
                </div>
                <div class="box__paciente_body ">
                    <div class="box__paciente_body_content">
                        <div class="info_pessoais">
                            <div class="info_header">
                                <span class="material-icons">face</span>
                            </div>
                            <div class="info_container">
                                <span>Idade</span><span>21</span>
                            </div>
                            <div class="info_container">
                                <span>Telefone</span><span>(21)91234-5678</span>
                            </div>
                            <div class="info_container">
                                <span>E-mail</span><span>email@email.com</span>
                            </div>
                        </div>
                        <div class="info_consultas">
                            <div class="info_header">
                                <span class="material-icons">article</span>
                            </div>
                            <div class="info_container">
                                <span>Consultas</span><span>17</span>
                            </div>
                            <div class="info_container">
                                <span>Notas</span><span>8</span>
                            </div>
                            <div class="info_container">
                                <span>Faltas</span><span>2</span>
                            </div>
                        </div>
                        <div class="info_financeiras">
                            <div class="info_header">
                                <span class="material-icons">monetization_on</span>
                            </div>
                            <div class="info_container">
                                <span>Pagamento</span><span>Mensal</span>
                            </div>
                            <div class="info_container">
                                <span>Valor</span><span>R$80</span>
                            </div>
                            <div class="info_container">
                                <span>Situação</span><span>Atrasado</span>
                            </div>
                        </div>
                        <div class="box__paciente_body_footer">
                            <button class="btn_bx_paciente_footer-ver-mais">Ver Mais</button>
                            <button class="btn_bx_paciente_footer-iniciar-consulta">Iniciar Consulta</button>
                        </div>

                    </div>
                </div>
            </div>

            <div class="accordion__paciente">
                <div class="box__paciente__header">
                    <div class="box_paciente_left_side">
                        <div class="paciente_img"><img src=${this.img_modelo}></div>
                        <span class="pacinte_nome">Fellipe Lorram</span>
                    </div>
                    <div id="box__paciente__header-presencial">Presencial</div>
                    <div id="box_paciente_center-first" class="box_paciente_center">
                        <span>Segundas</span>
                        <span>16:00</span>
                    </div>
                    <div id="box_paciente_center-second" class="box_paciente_center">
                        <div class="ativo_inativo"></div>
                        <span class="ativo_inativo_text">Ativo</span>
                    </div>
                    <div class="box_paciente_left_right">
                        <span class="material-icons">expand_more</span>
                    </div>
                </div>
                <div class="box__paciente_body ">
                    <div class="box__paciente_body_content">
                        <div class="info_pessoais">
                            <div class="info_header">
                                <span class="material-icons">face</span>
                            </div>
                            <div class="info_container">
                                <span>Idade</span><span>21</span>
                            </div>
                            <div class="info_container">
                                <span>Telefone</span><span>(21)91234-5678</span>
                            </div>
                            <div class="info_container">
                                <span>E-mail</span><span>email@email.com</span>
                            </div>
                        </div>
                        <div class="info_consultas">
                            <div class="info_header">
                                <span class="material-icons">article</span>
                            </div>
                            <div class="info_container">
                                <span>Consultas</span><span>17</span>
                            </div>
                            <div class="info_container">
                                <span>Notas</span><span>8</span>
                            </div>
                            <div class="info_container">
                                <span>Faltas</span><span>2</span>
                            </div>
                        </div>
                        <div class="info_financeiras">
                            <div class="info_header">
                                <span class="material-icons">monetization_on</span>
                            </div>
                            <div class="info_container">
                                <span>Pagamento</span><span>Mensal</span>
                            </div>
                            <div class="info_container">
                                <span>Valor</span><span>R$80</span>
                            </div>
                            <div class="info_container">
                                <span>Situação</span><span>Atrasado</span>
                            </div>
                        </div>
                        <div class="box__paciente_body_footer">
                            <button class="btn_bx_paciente_footer-ver-mais">Ver Mais</button>
                            <button class="btn_bx_paciente_footer-iniciar-consulta">Iniciar Consulta</button>
                        </div>

                    </div>
                </div>
            </div>

            <div class="accordion__paciente">
                <div class="box__paciente__header">
                    <div class="box_paciente_left_side">
                        <div class="paciente_img"><img src=${this.img_modelo}></div>
                        <span class="pacinte_nome">Fellipe Lorram</span>
                    </div>
                    <div id="box__paciente__header-presencial">Presencial</div>
                    <div id="box_paciente_center-first" class="box_paciente_center">
                        <span>Segundas</span>
                        <span>16:00</span>
                    </div>
                    <div id="box_paciente_center-second" class="box_paciente_center">
                        <div class="ativo_inativo inativo"></div>
                        <span class="ativo_inativo_text inativo">Inativo</span>
                    </div>
                    <div class="box_paciente_left_right">
                        <span class="material-icons">expand_more</span>
                    </div>
                </div>
                <div class="box__paciente_body ">
                    <div class="box__paciente_body_content">
                        <div class="info_pessoais">
                            <div class="info_header">
                                <span class="material-icons">face</span>
                            </div>
                            <div class="info_container">
                                <span>Idade</span><span>21</span>
                            </div>
                            <div class="info_container">
                                <span>Telefone</span><span>(21)91234-5678</span>
                            </div>
                            <div class="info_container">
                                <span>E-mail</span><span>email@email.com</span>
                            </div>
                        </div>
                        <div class="info_consultas">
                            <div class="info_header">
                                <span class="material-icons">article</span>
                            </div>
                            <div class="info_container">
                                <span>Consultas</span><span>17</span>
                            </div>
                            <div class="info_container">
                                <span>Notas</span><span>8</span>
                            </div>
                            <div class="info_container">
                                <span>Faltas</span><span>2</span>
                            </div>
                        </div>
                        <div class="info_financeiras">
                            <div class="info_header">
                                <span class="material-icons">monetization_on</span>
                            </div>
                            <div class="info_container">
                                <span>Pagamento</span><span>Mensal</span>
                            </div>
                            <div class="info_container">
                                <span>Valor</span><span>R$80</span>
                            </div>
                            <div class="info_container">
                                <span>Situação</span><span>Atrasado</span>
                            </div>
                        </div>
                        <div class="box__paciente_body_footer">
                            <button class="btn_bx_paciente_footer-ver-mais">Ver Mais</button>
                            <button class="btn_bx_paciente_footer-iniciar-consulta">Iniciar Consulta</button>
                        </div>

                    </div>
                </div>
            </div>
            <div class="espacamento"></div>
        </div>

        <div class="add_new_paciente_content">
            <span class="material-icons add_icon open_with_left_side">trending_flat</span>
            <span class="add_text">Adicionar Paciente</span>
            <span class="material-icons add_icon">person_add_alt</span>
            <span class="material-icons add_icon open_with">trending_flat</span>
        </div>

        <div id="add_New_Content_post_it" class="add_new_paciente_content_mobile">
            <span id="post_it_icon" class="material-icons add_new_paciente_mobile_icon">add</span>
            <span class="add_new_paciente_mobile_text">Adicionar Paciente</span>
        </div>
    
        
         `;
    }

    handleFrontEnd() {
        const accordionItemHeaders = document.querySelectorAll(".box__paciente__header");

        accordionItemHeaders.forEach(accordionItemHeader => {
            accordionItemHeader.addEventListener("click", () => {

                accordionItemHeader.classList.toggle("active");
                const accordionItemBody = accordionItemHeader.nextElementSibling;
                const accordionFooter = accordionItemBody.querySelector('.box__paciente_body_footer');
                if (accordionItemHeader.classList.contains("active")) {
                    accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
                    accordionItemBody.parentElement.style.borderBottomRightRadius = 0;
                    accordionItemBody.parentElement.style.marginBottom = "90px";
                    accordionItemBody.parentElement.classList.add('active');
                    if (window.screen.width <= 768) accordionFooter.style.width = window.getComputedStyle(accordionItemBody.parentElement).getPropertyValue('width')
                    setTimeout(function () {
                        accordionItemBody.style.overflow = "visible"
                    }, 100);
                }
                else {
                    accordionItemBody.parentElement.style.borderBottomRightRadius = "30px";
                    accordionItemBody.parentElement.style.marginBottom = "30px";
                    accordionItemBody.style.overflow = "hidden"
                    accordionItemBody.style.maxHeight = 0;
                    accordionItemBody.parentElement.classList.remove('active');
                }
            });
        });

        // ADD NOVO PACIENTE
        const addNewPacienteMobile = document.querySelector('.add_new_paciente_content_mobile');

        document.querySelector('.add_new_paciente_content').addEventListener('click', e => {
            if (!e.target.classList.contains('open_with') && !e.target.classList.contains('open_with_left_side')) NovoPaciente.open();
        });

        addNewPacienteMobile.addEventListener('click', e => {
            if (!e.target.classList.contains('add_new_paciente_mobile_icon')) NovoPaciente.open();
        });


        addNewPacienteMobile.querySelector('.add_new_paciente_mobile_icon').addEventListener('click', e => {
            e.target.classList.toggle('icon_rotate');
            addNewPacienteMobile.classList.toggle('active');
        });



    }
}

