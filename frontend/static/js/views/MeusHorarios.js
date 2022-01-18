import AbstractView from "./AbstractView.js"

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Meus Horários");
    }

    async getEjs() {
        return `

        <div class="main">
            <div class="main_top_bar">
                <div class="top_bar_toggle" id="menuButton">
                    <span class="material-icons">menu</span>
                </div>
                <div class="top_bar_reference">
                    Meus Horarios
                </div>
                <div class="top_bar_icon">
                    <span class="material-icons">psychology</span>
                </div>
            </div>

            <div class="minha_agenda_container">
                <div class="horas_container">
                    <div class="hora_header"><span class="material-icons">schedule</span></div>
                    <div class="hora"><span>8:00</span></div>
                    <div class="hora"><span>9:00</span></div>
                    <div class="hora"><span>10:00</span></div>
                    <div class="hora"><span>11:00</span></div>
                    <div class="hora"><span>12:00</span></div>
                    <div class="hora"><span>13:00</span></div>
                    <div class="hora"><span>14:00</span></div>
                    <div class="hora"><span>15:00</span></div>
                    <div class="hora"><span>16:00</span></div>
                    <div class="hora"><span>17:00</span></div>
                    <div class="hora"><span>18:00</span></div>
                    <div class="hora"><span>19:00</span></div>
                    <div class="hora"><span>20:00</span></div>
                    <div class="hora"><span>21:00</span></div>
                    <div class="hora_footer"><span class="material-icons">schedule</span></div>
                </div>

                <div class="dias_container">
                    <div class="dia">
                        <div  data-dia="segunda" class="dia_header">Segunda</div>
                        <div data-hora="8:00" class="paciente_horario"><span></span></div>
                        <div data-hora="9:00" class="paciente_horario"><span></span></div>
                        <div data-hora="10:00" class="paciente_horario"><span></span></div>
                        <div data-hora="11:00" class="paciente_horario"><span></span></div>
                        <div data-hora="12:00" class="paciente_horario"><span>Peterson</span></div>
                        <div data-hora="13:00" class="paciente_horario"><span></span></div>
                        <div data-hora="14:00" class="paciente_horario"><span></span></div>
                        <div data-hora="15:00" class="paciente_horario"><span>Yan</span></div>
                        <div data-hora="16:00" class="paciente_horario"><span></span></div>
                        <div data-hora="17:00" class="paciente_horario"><span></span></div>
                        <div data-hora="18:00" class="paciente_horario"><span></span></div>
                        <div data-hora="19:00" class="paciente_horario"><span></span></div>
                        <div data-hora="20:00" class="paciente_horario"><span></span></div>
                        <div data-hora="21:00" class="paciente_horario"><span></span></div>
                        <div  data-dia="segunda" class="dia_footer">Segunda</div>
                    </div>


                    <div class="dia">
                        <div data-dia="terca" class="dia_header">Terça</div>
                        <div data-hora="8:00" class="paciente_horario"><span></span></div>
                        <div data-hora="9:00" class="paciente_horario"><span></span></div>
                        <div data-hora="10:00" class="paciente_horario"><span></span></div>
                        <div data-hora="11:00" class="paciente_horario"><span></span></div>
                        <div data-hora="12:00" class="paciente_horario"><span></span></div>
                        <div data-hora="13:00" class="paciente_horario"><span></span></div>
                        <div data-hora="14:00" class="paciente_horario"><span></span></div>
                        <div data-hora="15:00" class="paciente_horario"><span></span></div>
                        <div data-hora="16:00" class="paciente_horario"><span></span></div>
                        <div data-hora="17:00" class="paciente_horario"><span></span></div>
                        <div data-hora="18:00" class="paciente_horario"><span></span></div>
                        <div data-hora="19:00" class="paciente_horario"><span></span></div>
                        <div data-hora="20:00" class="paciente_horario"><span></span></div>
                        <div data-hora="21:00" class="paciente_horario"><span></span></div>
                        <div  data-dia="segunda" class="dia_footer">Terça</div>
                    </div>

                    <div class="dia">
                        <div data-dia="quarta" class="dia_header">Quarta</div>
                        <div data-hora="8:00" class="paciente_horario"><span></span></div>
                        <div data-hora="9:00" class="paciente_horario"><span></span></div>
                        <div data-hora="10:00" class="paciente_horario"><span></span></div>
                        <div data-hora="11:00" class="paciente_horario"><span></span></div>
                        <div data-hora="12:00" class="paciente_horario"><span></span></div>
                        <div data-hora="13:00" class="paciente_horario"><span></span></div>
                        <div data-hora="14:00" class="paciente_horario"><span></span></div>
                        <div data-hora="15:00" class="paciente_horario"><span></span></div>
                        <div data-hora="16:00" class="paciente_horario"><span></span></div>
                        <div data-hora="17:00" class="paciente_horario"><span></span></div>
                        <div data-hora="18:00" class="paciente_horario"><span></span></div>
                        <div data-hora="19:00" class="paciente_horario"><span></span></div>
                        <div data-hora="20:00" class="paciente_horario"><span></span></div>
                        <div data-hora="21:00" class="paciente_horario"><span></span></div>
                        <div  data-dia="segunda" class="dia_footer">Quarta</div>
                    </div>

                    <div class="dia">
                        <div  data-dia="quinta" class="dia_header">Quinta</div>
                        <div data-hora="8:00" class="paciente_horario"><span></span></div>
                        <div data-hora="9:00" class="paciente_horario"><span></span></div>
                        <div data-hora="10:00" class="paciente_horario"><span></span></div>
                        <div data-hora="11:00" class="paciente_horario"><span></span></div>
                        <div data-hora="12:00" class="paciente_horario"><span></span></div>
                        <div data-hora="13:00" class="paciente_horario"><span></span></div>
                        <div data-hora="14:00" class="paciente_horario"><span></span></div>
                        <div data-hora="15:00" class="paciente_horario"><span></span></div>
                        <div data-hora="16:00" class="paciente_horario"><span></span></div>
                        <div data-hora="17:00" class="paciente_horario"><span></span></div>
                        <div data-hora="18:00" class="paciente_horario"><span></span></div>
                        <div data-hora="19:00" class="paciente_horario"><span></span></div>
                        <div data-hora="20:00" class="paciente_horario"><span></span></div>
                        <div data-hora="21:00" class="paciente_horario"><span></span></div>
                        <div  data-dia="segunda" class="dia_footer">Quinta</div>
                    </div>

                    <div class="dia">
                        <div  data-dia="sexta" class="dia_header">Sexta</div>
                        <div data-hora="8:00" class="paciente_horario"><span></span></div>
                        <div data-hora="9:00" class="paciente_horario"><span></span></div>
                        <div data-hora="10:00" class="paciente_horario"><span></span></div>
                        <div data-hora="11:00" class="paciente_horario"><span></span></div>
                        <div data-hora="12:00" class="paciente_horario"><span></span></div>
                        <div data-hora="13:00" class="paciente_horario"><span></span></div>
                        <div data-hora="14:00" class="paciente_horario"><span></span></div>
                        <div data-hora="15:00" class="paciente_horario"><span></span></div>
                        <div data-hora="16:00" class="paciente_horario"><span></span></div>
                        <div data-hora="17:00" class="paciente_horario"><span></span></div>
                        <div data-hora="18:00" class="paciente_horario"><span></span></div>
                        <div data-hora="19:00" class="paciente_horario"><span></span></div>
                        <div data-hora="20:00" class="paciente_horario"><span></span></div>
                        <div data-hora="21:00" class="paciente_horario"><span></span></div>
                        <div  data-dia="segunda" class="dia_footer">Sexta</div>
                    </div>

                    <div class="dia">
                        <div  data-dia="sabado" class="dia_header">Sábado</div>
                        <div data-hora="8:00" class="paciente_horario"><span></span></div>
                        <div data-hora="9:00" class="paciente_horario"><span></span></div>
                        <div data-hora="10:00" class="paciente_horario"><span></span></div>
                        <div data-hora="11:00" class="paciente_horario"><span></span></div>
                        <div data-hora="12:00" class="paciente_horario"><span></span></div>
                        <div data-hora="13:00" class="paciente_horario"><span></span></div>
                        <div data-hora="14:00" class="paciente_horario"><span></span></div>
                        <div data-hora="15:00" class="paciente_horario"><span></span></div>
                        <div data-hora="16:00" class="paciente_horario"><span></span></div>
                        <div data-hora="17:00" class="paciente_horario"><span></span></div>
                        <div data-hora="18:00" class="paciente_horario"><span></span></div>
                        <div data-hora="19:00" class="paciente_horario"><span></span></div>
                        <div data-hora="20:00" class="paciente_horario"><span></span></div>
                        <div data-hora="21:00" class="paciente_horario"><span></span></div>
                        <div  data-dia="segunda" class="dia_footer">Sábado</div>
                    </div>

                </div>
            </div>

        </div>
        
        <div class="add_new_paciente_content">
            <span class="material-icons add_icon open_with_left_side">trending_flat</span>
            <span class="add_text">Adicionar Paciente</span>
            <span class="material-icons add_icon">person_add_alt</span>
            <span class="material-icons add_icon open_with">trending_flat</span>
        </div>         `;
    }

    handleFrontEnd() {
    }

}

