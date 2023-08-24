import React, { useState, useEffect } from "react";
import Sidebar from './../Sidebar/Sidebar';
import Search from "./../Search/Search";
import Filter from './../Filter/Filter';
import ProductCard from "./../ProductCard/ProductCard";
import Paginate from "./../Paginate/Paginate";
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
