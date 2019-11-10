import React, { useState, useEffect } from "react";
import axios from "axios";
import SWCard from "./SWCard";


export default function SWList(){
    const [details, setDetails] = useState([])

    useEffect(() => {
        axios
        .get("https://swapi.co/api/people/")
        .then(response =>{
            const details = response.data.results;
            setDetails(details);
            console.log(details);

        })
    },[]);

    return (
        <div className="swcard">
            {details.map(value => <SWCard
            name={value.name}
            born={value.birth_year}
            gender={value.gender}
            height={value.height}
            hairColor={value.hair_color}
            eyeColor={value.eye_color}

            key={value.index}

            
            
            />)}

        </div>
    )







}

