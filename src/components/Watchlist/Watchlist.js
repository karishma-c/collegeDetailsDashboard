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
                                       <h3 className="city">2022 Public '' + {collegeData.city}</h3>
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
                                    <h3 className="achievementsHeading">Specialities</h3>
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