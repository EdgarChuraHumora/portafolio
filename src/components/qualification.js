import React, {useState} from "react";

export const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return(
        <section className="qualification section" id="qualification">
            <h1 className="section_title">Calificacion</h1>
            <span className="section_subtitle">Mi carrera personal</span>

            <div className="qualification_container container">
                <div className="qualification_tabs">
                    <div className={toggleState === 1 ? "qualification_button qualification_active button-flex" : "qualification_button button--flex" }  onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification_icon"> </i>
                        Education
                    </div>
                        <div className={toggleState === 2 ? "qualification_button qualification_active button-flex" : "qualification_button button--flex"} onClick={() => toggleTab(2)}>
                            <i className="uil uil-briefcase-alt qualification_icon"> </i>
                            Experience
                        </div>
                </div>
                <div className="qualification_sections">
                    <div className={toggleState === 1 ? "qualification_content qualification_content-active": "qualification_content"}>
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Computacion e Informática</h3>
                                <span className="qualification_subtitle">José Antonio Encinas - Perú - Puno</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>2020 - 2022
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualification_content qualification_content-active": "qualification_content"}>
                    </div>
                </div>
            </div>
        </section>
    )
}