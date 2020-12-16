import React, { useEffect, useState } from 'react'
import "../css/MainContent.css";
import Card from '../components/Card.jsx';
import { Row } from "react-bootstrap";
import Header from '../components/Header';
import { trackPromise } from 'react-promise-tracker';
import Loader from "../components/Loader";

export default function MainContent() {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [searchItem, setSearchItem] = useState("");

    useEffect(() => {
        trackPromise(
        fetch("https://restcountries.eu/rest/v2/all")
            .then(res => res.json())
            .then(data => {
                setData(data);
                console.log(data)
            }))
    
    setLoading(false);
    }, [])
    console.log(loading)
    const mapCountry = data && data.filter((val) => {
        if (searchItem === "") {
            return val;
        } else if (val.name.toLowerCase().includes(searchItem.toLowerCase())) {
            return val;
        }
    }).map(i => 
    <Card 
        key={i.name}
        countryName={i.name}
        countryNativeName={i.nativeName}
        countryFlag={i.flag}
        countryContinent={i.region}
        id={i.alpha3Code}
    />
    );
    const mapLoad = loading ? <h1>Loading...</h1> : mapCountry;
    return (
        <>
            <Header/>
            <Loader/>

            <div className="searchBar">
                <input type="text" placeholder="Search for a country.." onChange={e => setSearchItem(e.target.value)}/>
            </div>

            <div className="MainContent container">
                <Row>
                {mapCountry}
                </Row>
            </div>
        </>
    )
}
