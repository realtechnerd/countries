import React, { useEffect, useState } from 'react'
import "../css/Country.css";
import { Link } from "react-router-dom";

export default function Country({ match }) {
    const [data, setData] = useState({});
    const [population, setPopulation] = useState("");
    const [languages, setLanguages] = useState("");

    useEffect(() => {
        fetchItem();
    }, [])
    

    const fetchItem = async () => {
        await fetch(`https://restcountries.eu/rest/v2/alpha/${match.params.id}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
                console.log(data);
            })
    }

    const mapLangs = data.languages && data.languages.map(i => 
                <>
                <ul className="langs">
                    <li key={i.name}>{i.name}</li>
                </ul>
                </>
    )
    const mapCurrencies = data.currencies && data.currencies.map(i => 
        <>
            <ul className="langs">
                <li>{i.name} | {i.symbol}</li>
            </ul>
        </>
        )

    return (
        
        <div className="Country myContainer">
            <div className="card">
                <div className="card-body">
                    <Link to="/"><h5 className="BackHome">Back to All Countries</h5></Link>
                </div>
            </div>
            <div className="card">

           {data, data.languages, data.population, data.currencies && (
           <>
                 <img src={data.flag} className="card-img-top"/>
                <div className="card-body">
                    {data.nativeName}
                    <h1>{data.name}</h1>
                    <p style={{display: !data.region && "none"}}>Country in {data.region}</p>
                    <hr/>
                    <h4 style={{display: !data.capital && "none"}}><b>Capital:</b> {data.capital}</h4>
                    <p style={{display: !data.population && "none"}}><b>Population:</b> {data.population.toLocaleString()}</p>
                    <p style={{display: !data.currencies && "none"}}><b>Spoken Languages:</b></p>
                    {mapLangs}
                    <p><b>Accepted Currencies:</b></p>
                    {mapCurrencies}
                </div>
           </>

           )}
            </div>
        </div>
    )
}
