import React, { useState, useEffect } from "react";
import Sidebar from './../Sidebar/Sidebar';
import Search from "./../Search/Search";
import Watchlist from "./../Watchlist/Watchlist";
import ProductCard from "./../ProductCard/ProductCard";

import './Home.css';

const Home = () => {

    return (
        <div className="home">
            <Sidebar />
            <div className="mainContainer">
                <Search />
                <div className="innerContainer">
                    <Watchlist />
                </div>
            </div>
        </div>
    )

}

export default Home;
