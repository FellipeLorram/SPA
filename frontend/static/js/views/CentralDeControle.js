import AbstractView from "./AbstractView.js"
import novoLembrete from "./NovoLembrete/novoLembrete.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Controle");
    }

    async getEjs() {
        return `


        <div class="main">
            <div class="main_top_bar">
                <div class="top_bar_toggle" id="menuButton">
                    <span class="material-icons">menu</span>
                </div>
                <div class="top_bar_reference">
                    Central de Controle
                </div>
                <div class="top_bar_icon">
                    <span class="material-icons">psychology</span>
                </div>

            </div>

            <div class="card_box_days">
                <div class="card_day">
                    <div class="card_header">Hoje</div>
                    <div class="card_content">
                        <div class="card_content--paciente">
                            <span class="paciente">Fellipe</span>
                            <span class="horario">16:00</span>
                        </div>
                        <div class="card_content--paciente">
                            <span class="paciente">Rafael</span>
                            <span class="horario">17:30</span>
                        </div>
                        <div class="card_content--paciente">
                            <span class="paciente">Samuel</span>
                            <span class="horario">19:30</span>
                        </div>
                    </div>
                </div>
                <div class="card_day">
                    <div class="card_header">Amanhã</div>
                    <div class="card_content">
                        <div class="card_content--paciente">
                            <span class="paciente">Beatriz</span>
                            <span class="horario">16:30</span>
                        </div>
                    </div>
                </div>
                <div class="card_day">
                    <div class="card_header">Segunda-feira</div>
                    <div class="card_content">
                        <div class="card_content--paciente">
                            <span class="paciente">Peterson</span>
                            <span class="horario">12:00</span>
                        </div>
                        <div class="card_content--paciente">
                            <span class="paciente">Maria</span>
                            <span class="horario">12:00</span>
                        </div>
                        <div class="card_content--paciente">
                            <span class="paciente">Nicolas</span>
                            <span class="horario">12:00</span>
                        </div>
                    </div>
                </div>
                <div class="card_day">
                    <div class="card_header">Terça-feira</div>
                    <div class="card_content">
                        <div class="card_content--paciente">
                            <span class="paciente">Yan</span>
                            <span class="horario">12:00</span>
                        </div>
                        <div class="card_content--paciente">
                            <span class="paciente">Yasmin</span>
                            <span class="horario">12:00</span>
                        </div>
                        <div class="card_content--paciente">
                            <span class="paciente">Ana Claudia</span>
                            <span class="horario">12:00</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="line"></div>

            <div class="card_box_controle">
                <div class="card_lembretes">
                    <div class="card_lembretes_header">
                        <span class="card_lembretes_header-text">Lembretes</span>
                    </div>
                    <div class="card_lembretes_content">
                        <div class="lembrete_container"><span class="lembrete">Desmarcar Fellipe</span></div>
                        <div class="lembrete_container"><span class="lembrete">Ligar para Peterson</span></div>
                        <div class="lembrete_container"><span class="lembrete">Pesquisar sobre ...</span></div>
                    </div>
                </div>

                <div class="card_pacientes_info">
                    <div class="card_pacientes_info-infos">
                        <span class="info_text">
                            <span class="material-icons info_icon">people_alt</span>
                            <span class="info_text-text">Pacientes</span>
                        </span>
                        <span class="info_number">8</span>
                    </div>
                    <div class="card_pacientes_info-infos">
                        <span class="info_text">
                            <span class="material-icons info_icon">speaker_notes</span>
                            <span class="info_text-text">Notas</span>
                        </span>
                        <span class="info_number">78</span>
                    </div>
                    <div class="card_pacientes_info-infos">
                        <span class="info_text">
                            <span class="material-icons info_icon">extension</span>
                            <span class="info_text-text">Atividades</span>
                        </span>
                        <span class="info_number">15</span>
                    </div>
                </div>

                <div class="card_financeiro_info">
                    <div class="card_pacientes_info-infos">
                        <span class="info_text">
                            <span class="material-icons info_icon">paid</span>
                            <span class="info_text">Recebido</span>
                        </span>
                        <span class="info_number-financeiro">R$500</span>
                    </div>
                    <div class="card_pacientes_info-infos">
                        <span class="info_text">
                            <span class="material-icons info_icon">price_change</span>
                            <span class="info_text-text">A receber</span>
                        </span>
                        <span class="info_number-financeiro">R$420</span>
                    </div>
                    <div class="card_pacientes_info-infos">
                        <span class="info_text">
                            <span class="material-icons info_icon">money_off_csred</span>
                            <span class="info_text-text">Atrasado</span>
                        </span>
                        <span class="info_number-atrasado">R$200</span>
                    </div>
                </div>

                <div class="card_horas_info">
                    <table class="info_table">
                        <thead>
                            <tr>
                                <td></td>
                                <td>Semana</td>
                                <td>Mês</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Horas</td>
                                <td>40</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <td>Ganhos</td>
                                <td>R$720</td>
                                <td>R$2880</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="line"></div>

            <div class="semana_mes_container">

                <div class="semana">
                    <div class="semana_header">
                        <span class="semana_header_text">
                            Semana <span class="material-icons semana_header_icon">view_week</span>
                        </span>
                    </div>
                    <div class="semana_container">
                        <div class="dia_semana">
                            <div class="dia_semana_header">Segunda-feira</div>
                            <div class="info_day">
                                <span class="info_text-text">Pacientes</span>
                                <span class="info_number">2</span>
                            </div>
                            <div class="dia_semana_content">
                                <div class="dia_semana_card_content-info">
                                    <span class="paciente">Peso</span>
                                    <span class="horario">8%</span>
                                </div>
                                <div class="dia_semana_card_content-info">
                                    <span class="paciente">Horas</span>
                                    <span class="horario">2:00</span>
                                </div>
                                <div class="dia_semana_card_content-info">
                                    <span class="paciente">Ganhos</span>
                                    <span class="horario">R$ 120</span>
                                </div>
                            </div>
                        </div>
                        <div class="dia_semana">
                            <div class="dia_semana_header">Terça-feira</div>
                            <div class="info_day">
                                <span class="info_text-text">Pacientes</span>
                                <span class="info_number">8</span>
                            </div>
                            <div class="dia_semana_content">
                                <div class="dia_semana_card_content-info">
                                    <span class="info">Peso</span>
                                    <span class="horario">12%</span>
                                </div>
                                <div class="dia_semana_card_content-info">
                                    <span class="info">Horas</span>
                                    <span class="horario">12:00</span>
                                </div>
                                <div class="dia_semana_card_content-info">
                                    <span class="info">Ganhos</span>
                                    <span class="horario">R$120</span>
                                </div>
                            </div>
                        </div>
                        <div class="dia_semana">
                            <div class="dia_semana_header">Quarta-feira</div>
                            <div class="info_day">
                                <span class="info_text-text">Pacientes</span>
                                <span class="info_number">8</span>
                            </div>
                            <div class="dia_semana_content">
                                <div class="dia_semana_card_content-info">
                                    <span class="info">Peso</span>
                                    <span class="horario">12%</span>
                                </div>
                                <div class="dia_semana_card_content-info">
                                    <span class="info">Horas</span>
                                    <span class="horario">12:00</span>
                                </div>
                                <div class="dia_semana_card_content-info">
                                    <span class="info">Ganhos</span>
                                    <span class="horario">R$120</span>
                                </div>
                            </div>
                        </div>
                        <div class="dia_semana">
                            <div class="dia_semana_header">Quinta-feira</div>
                            <div class="info_day">
                                <span class="info_text-text">Pacientes</span>
                                <span class="info_number">8</span>
                            </div>
                            <div class="dia_semana_content">
                                <div class="dia_semana_card_content-info">
                                    <span class="info">Peso</span>
                                    <span class="horario">12%</span>
                                </div>
                                <div class="dia_semana_card_content-info">
                                    <span class="info">Horas</span>
                                    <span class="horario">12:00</span>
                                </div>
                                <div class="dia_semana_card_content-info">
                                    <span class="info">Ganhos</span>
                                    <span class="horario">R$120</span>
                                </div>
                            </div>
                        </div>
                        <div class="dia_semana">
                            <div class="dia_semana_header">Sexta-feira</div>
                            <div class="info_day">
                                <span class="info_text-text">Pacientes</span>
                                <span class="info_number">8</span>
                            </div>
                            <div class="dia_semana_content">
                                <div class="dia_semana_card_content-info">
                                    <span class="info">Peso</span>
                                    <span class="horario">12%</span>
                                </div>
                                <div class="dia_semana_card_content-info">
                                    <span class="info">Horas</span>
                                    <span class="horario">12:00</span>
                                </div>
                                <div class="dia_semana_card_content-info">
                                    <span class="info">Ganhos</span>
                                    <span class="horario">R$120</span>
                                </div>
                            </div>
                        </div>
                        <div class="dia_semana">
                            <div class="dia_semana_header">Sábado</div>
                            <div class="info_day">
                                <span class="info_text-text">Pacientes</span>
                                <span class="info_number">8</span>
                            </div>
                            <div class="dia_semana_content">
                                <div class="dia_semana_card_content-info">
                                    <span class="info">Peso</span>
                                    <span class="horario">12%</span>
                                </div>
                                <div class="dia_semana_card_content-info">
                                    <span class="info">Horas</span>
                                    <span class="horario">12:00</span>
                                </div>
                                <div class="dia_semana_card_content-info">
                                    <span class="info">Ganhos</span>
                                    <span class="horario">R$120</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="add_new_note_content">
            <span class="material-icons add_icon open_with_left_side">trending_flat</span>
            <span class="add_text">Adicionar Lembrete</span>
            <span class="material-icons add_icon">post_add</span>
            <span class="material-icons add_icon open_with">trending_flat</span>
        </div>

        <div id="add_New_Content_post_it" class="add_new_lembrete_content_mobile ">
            <span id="post_it_icon" class="material-icons add_new_paciente_mobile_icon">add</span>
            <span class="add_new_lembrete_mobile_text">Adicionar Lembrete</span>
        </div>

        `;
    }

    handleFrontEnd() {
        // Novo Lembrete
        document.querySelector('.add_new_note_content').addEventListener('click', e => {
            if (!e.target.classList.contains('open_with') && !e.target.classList.contains('open_with_left_side')) novoLembrete.open();
        });

        const addNewNoteMobile = document.querySelector('.add_new_lembrete_content_mobile');

        addNewNoteMobile.addEventListener('click', e => {
            if (!e.target.classList.contains('add_new_paciente_mobile_icon')) novoLembrete.open();
        });

        addNewNoteMobile.querySelector('.add_new_paciente_mobile_icon').addEventListener('click', e => {
            e.target.classList.toggle('icon_rotate');
            addNewNoteMobile.classList.toggle('active');
        });

    }
}
