import React from 'react'
import "../css/Card.css";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Card(props) {
    return (
        <Col lg="4" md="6">
            <div className="card countryCard">
                <img src={props.countryFlag} className="card-img-top"/>
                <div className="card-body">
                    {props.countryNativeName}
                    <h3 className="card-title">{props.countryName}</h3>
                    <p id="countryContinent">Country in {props.countryContinent}</p>
                    <br/>
                    <Link to={`/country/${props.id}`} className="b card-btn lb">More information</Link>
                </div>
            </div>
        </Col>
    )
}
