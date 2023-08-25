import React from "react";
import data from './../../data';
import './Watchlist.css';

const Watchlist = () => {

    return (
        <div className="watchlistContainer">
            <div className="cardContainer">
                {
                    data.map(collegeData => {
                        return (
                            <div className="watchlistCard">
                                <div className="cardHeader">
                                    <div className="headerDetails">
                                       <h2 className="collegeName">{collegeData.college_title}</h2>
                                       <h3 className="city">2022 Public  {collegeData.city}</h3>
                                    </div>
                                    <div className="headerOptions">
                                        {
                                            collegeData.college_title === "University of Chivago" ?
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#597e8d" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                    <path d="M4 7l16 0" />
                                                    <path d="M10 11l0 6" />
                                                    <path d="M14 11l0 6" />
                                                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                                </svg>
                                            : 
                                            collegeData.college_title === "Ruglers University" ?
                                                <div className="admitted">
                                                    <svg id="tickIcon" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#806ae4" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                       <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                       <path d="M5 12l5 5l10 -10" />
                                                    </svg>
                                                    <h4 className="admittedValue">{collegeData.admit}</h4>
                                                </div>
                                            :
                                            ''    
                                        }
                                    </div>
                                </div>
                                <div className="majors">
                                    {
                                        collegeData.major.map(majors => {
                                            return (
                                                <h4 className="majorsValue">{majors}</h4>
                                            )
                                        })
                                    }
                                </div>
                                <div className="sat">
                                    <h3 className="satHeading">SAT</h3>
                                    <h4 className="satValue">{collegeData.sat}</h4>
                                </div>
                                <div className="act">
                                    <h3 className="actHeading">ACT</h3>
                                    <h4 className="actValue">{collegeData.act}</h4>
                                </div>
                                <div className="specialization">
                                    <h3 className="achievementsHeading">SPECIALITIES</h3>
                                    <div className="achievements">
                                        {
                                            collegeData.achievements.map(specialization => {
                                                return (
                                                    <h4 className="achievementsValue">{specialization}</h4>
                                                )
                                            })
                                        }
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

export default Watchlist;