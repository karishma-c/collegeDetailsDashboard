import React, { useState } from 'react';
import './AddCollegeForm.css';
import CollegeCard from './../CollegeCard/CollegeCard';

const AddPatientForm = ({ closeModal, newFormData }) => {
    
    const [selectedAchievement, setSelectedAchievement] = useState("");
    const [major, setMajor] = useState("");
    
    const handleCheckBox = (e) => {
        let currentValue = e.target.value;
        setSelectedAchievement(currentValue);
    }

    const addCollege = (e) => {

        e.preventDefault();
        let Error = "This field cannot be empty";

        let collegeName = document.getElementById('c-name');
        let city = document.getElementById('c-city');
        let majors = document.getElementById('c-major');
        let sat = document.getElementById('sat');
        let act = document.getElementById('act');
        let achievements = document.getElementById('checkBoxGroup');

        let nameError = document.getElementById('nameError');
        let majorError = document.getElementById('majorError');
        let satError = document.getElementById('satError');
        let actError = document.getElementById('actError');
        let achievementError = document.getElementById('achievementError');

        if(collegeName.value || sat.value || act.value || majors.value !== '' || selectedAchievement !== ''  ) {
            if (collegeName.value.length > 0) {
                collegeName.classList.remove('invalid');
                nameError.style.display = "none";
            
                if (majors.value !== '') {
                    majorError.style.display = "none";
                    majors.classList.remove("invalid");
                    
                    if (sat.value >= 10 ) {
                        satError.style.display = "none";
                        sat.classList.remove("invalid");

                        if (act.value >= 10 ) {
                            actError.style.display = "none";
                            act.classList.remove("invalid")

                            if(selectedAchievement !== '') {
                                achievementError.style.display = 'none';
                                let obj = {
                                    college_title:'',
                                    city:'',
                                    major:'',
                                    sat:'',
                                    act:'',
                                    achievements:''
                                };
                                obj.college_title = collegeName.value;
                                obj.city = city.value;
                                obj.major = major;
                                obj.sat = sat.value;
                                obj.act = act.value;
                                obj.achievements = selectedAchievement;
                                newFormData(obj);
                                console.log(obj,"object");
                                closeModal();
                            }
                            else {
                                achievementError.style.display = "inline";
                                achievementError.innerHTML = Error;
                            }
                        }
                        else {
                            actError.style.display = "inline";
                            act.classList.add("invalid");
                            actError.innerHTML = Error;
                        }
                    }
                    else {
                        satError.style.display = "inline";
                        sat.classList.add("invalid");
                        satError.innerHTML = Error;
                    }
                }
                else {
                    majors.classList.add('invalid');
                    majorError.style.display = "inline";
                    majorError.innerHTML = Error;
                }
            }
            else {
                nameError.style.display = "inline";
                collegeName.classList.add("invalid");
                nameError.innerHTML = Error;
            } 
        }
        else {
            nameError.style.display = "inline";
            collegeName.classList.add("invalid");
            nameError.innerHTML = Error;

            majorError.style.display = "inline";
            majors.classList.add("invalid");
            majorError.innerHTML = Error;

            satError.style.display = "inline";
            sat.classList.add("invalid");
            satError.innerHTML = Error;

            actError.style.display = "inline";
            act.classList.add("invalid");
            actError.innerHTML = Error;

            achievementError.style.display = "inline";
            achievementError.innerHTML = Error;
        }    
    }
    
    
    return (
        <div className="addCollegeContainer">
                <div className='addCollegeheader'>
                    <h1 className="title">College Details</h1>
                    <svg onClick={closeModal} className='closeBtn' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18" stroke="#1c1e1f" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round"/>
                        <path d="M6 6L18 18" stroke="#1c1e1f" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                
                <form className="registerForm">
                    <div className='form-element'>
                        <label>College Name</label>
                        <input type="text" id="c-name" className="inputField" placeholder="Enter college name" required />
                        <span className="field-error" id="nameError"></span>
                    </div>
                    <div className='form-element'>
                        <label>City</label>
                        <input type="text" id="c-city" className="inputField" placeholder="Enter city" />
                    </div>
                    
                    <div className='form-element'>
                        <label>Major</label>
                        <select id="c-major" value={major} onChange={(e)=>setMajor(e.target.value)} defaultValue={major} className="inputField" required>
                            <option value="">-- Select Major --</option>
                            <option value="Agriculture">Agriculture</option>
                            <option value="Biology">Biology</option>
                            <option value="Computer Science">Computer Science</option>
                            <option value="Social Science">Social Science</option>
                        </select>
                        <span className="field-error" id="majorError"></span>
                    </div>
                    <div className='form-element'>
                        <label>SAT Score</label>
                        <input type="number" id="sat" className="inputField" placeholder="Enter SAT score" required />
                        <span className="field-error" id="satError"></span>
                    </div>
                    <div className='form-element'>
                        <label>ACT Score</label>
                        <input type="number" id="act" className="inputField" placeholder="Enter ACT score" required />
                        <span className="field-error" id="actError"></span>
                    </div>
                    <div className='form-element'>
                        <label>Achievements</label>
                        <div className='checkBoxGroup'>
                            <label>
                                <input type="checkbox" id="leadership" name="achievements" value="Leadership in a Student Club" onChange={(e)=>handleCheckBox(e)} checked={selectedAchievement === "Leadership in a Student Club"} />Leadership in a Student Club
                            </label>
                        </div>
                        <div className='checkBoxGroup'>
                            <label>
                                <input type="checkbox" id="aiScholar" name="achievements" value="AI Scholar" onChange={(e)=>handleCheckBox(e)} checked={selectedAchievement === "AI Scholar"} />AI Scholar
                            </label>
                        </div>
                        <div className='checkBoxGroup'>
                            <label>
                                <input type="checkbox" id="varsityAthlete" name="achievements" value="Varsity Athlete" onChange={(e)=>handleCheckBox(e)} checked={selectedAchievement === "Varsity Athlete"} />Varsity Athlete
                            </label>
                        </div>
                        <span className="field-error" id="achievementError"></span>
                    </div>
            
                    <button className='addcollegeBtn' onClick={(e) => addCollege(e)} >
                        Submit
                    </button>
                </form>
        </div>
    );
}

export default AddPatientForm;