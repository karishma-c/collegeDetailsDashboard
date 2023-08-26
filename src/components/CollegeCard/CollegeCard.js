import React, { useState } from "react";
import data from './../../data';
import Modal from './../Modal/Modal';
import AddCollegeForm from './../AddCollegeForm/AddCollegeForm';
import './CollegeCard.css';

const CollegeCard = ({data}) => {

    const[showFormModal, setShowFormModal] = useState(false);

    const newFormData = (formData) => {
       return data.push(formData);
    };

    const handleForm = () => {
        setShowFormModal(!showFormModal);
    }

    return (
        <div className="collegeCardContainer">
            <div className="containerHeader">
                <div className="headerHeading">
                    <h3 className="heading">Compare Colleges</h3>
                    <p className="desc">Drag and Drop colleges from watchlist to compare</p>
                </div>
                <button className="addCollegeButton" onClick={handleForm}>
                    <svg id="addClgIcon" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="22" height="22" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                       <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                       <path d="M12 5l0 14" />
                       <path d="M5 12l14 0" />
                    </svg>
                    Add College
                </button>
                {
                    showFormModal &&
                    <Modal closeModal={handleForm} right={'right'}>
                       <AddCollegeForm closeModal={handleForm} newFormData={newFormData} />
                    </Modal>
                }
            </div>
            <div className="collegeCards">
                {
                    data.map(collegeData => {
                        return (
                            <div className="collegeCard">
                                <div className="collegeCardHeader">
                                    <div className="headerDetails">
                                       <h2 className="colName">{collegeData.college_title}</h2>
                                       <h3 className="colCity">2022 Public  {collegeData.city}</h3>
                                    </div>
                                    {
                                        collegeData.college_title === "University of Chivago" ?
                                            <div className="headerOptions">
                                                <svg id="headerAddIcon" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                    <path d="M12 5l0 14" />
                                                    <path d="M5 12l14 0" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#597e8d" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                    <path d="M4 7l16 0" />
                                                    <path d="M10 11l0 6" />
                                                    <path d="M14 11l0 6" />
                                                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                                </svg>
                                            </div>
                                        : 
                                        ''    
                                    }
                                </div>
                                <div className="colSat">
                                    <h3 className="colSatHeading">SAT</h3>
                                    <h4 className="colSatValue">{collegeData.sat}</h4>
                                </div>
                                <div className="colAct">
                                    <h3 className="colActHeading">ACT</h3>
                                    <h4 className="colActValue">{collegeData.act}</h4>
                                </div>
                                <div className="additionalDetails">
                                    <div className="admission">
                                        <h3 className="admissionHeading">
                                            <svg id="admissionIcon" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-school" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
                                                <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
                                            </svg>
                                            Admission Rate
                                        </h3>
                                        <h4 className="admissionValue">{collegeData.admission_rate} /Year</h4>
                                    </div>
                                    <div className="distance">
                                        <h3 className="distanceHeading">
                                            <svg id="distanceIcon" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-scooter" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                <path d="M18 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                                <path d="M6 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                                <path d="M8 17h5a6 6 0 0 1 5 -5v-5a2 2 0 0 0 -2 -2h-1" />
                                            </svg>
                                            Distance from Home
                                        </h3>
                                        <h4 className="distanceValue">{collegeData.distance} Km</h4>
                                    </div>
                                    <div className="fees">
                                        <h3 className="feesHeading">
                                            <svg id="feesIcon" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-coin" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                                <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1" />
                                                <path d="M12 7v10" />
                                            </svg>
                                            Avg Tuition Fee
                                        </h3>
                                        <h4 className="feesValue">{collegeData.tuition_fees} /term</h4>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default CollegeCard;