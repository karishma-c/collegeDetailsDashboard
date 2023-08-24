import React, { useState, useEffect } from "react";
import Sidebar from './../Sidebar/Sidebar';
import Search from "./../Search/Search";

import ProductCard from "./../ProductCard/ProductCard";

import './Home.css';

const Home = () => {

    return (
        <div className="home">
            <Sidebar />
            <div className="mainContainer">
                <Search />
            </div>
        </div>
    )

}

export default Home;
