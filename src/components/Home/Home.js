import React from "react";
import data from './../../data';
import Sidebar from './../Sidebar/Sidebar';
import Search from "./../Search/Search";
import Watchlist from "./../Watchlist/Watchlist";
import LineChart from "./../LineChart/LineChart";
import CollegeCard from "./../CollegeCard/CollegeCard";

import './Home.css';

const Home = () => {

    return (
        <div className="home">
            <Sidebar />
            <div className="bodyContainer">
                <Search />
                <div className="innerContainer">
                    <Watchlist />
                    <div className="innerContainerRight">
                        <div className="innerContainerTop">
                           <LineChart />
                        </div>
                        <div className="innerContainerBottom">
                           <CollegeCard data={data} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Home;
