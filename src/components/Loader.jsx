import React from 'react'
import { usePromiseTracker } from "react-promise-tracker";
import "../css/Loader.css";
import LoaderImg from "../imgs/loader.gif";

export default function Loader() {
    const { promiseInProgress } = usePromiseTracker();
    return (
        promiseInProgress && 
        <div className="Loader">
            Loading... Please wait.
        </div>
    );  
}
