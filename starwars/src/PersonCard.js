import React from "react";
import styled from "styled-components";

const Card = styled.div`
    font-size: 29px;
    font-family: "Arial Rounded MT Bold";
    color: rgba(209, 208, 253, 0.902);
    line-height: 1.2;
    text-align: center;
    text-shadow: 0px 12px 0px rgba(201, 198, 241, 0.004);
    color: white;
    border-style: solid;
    border-width: 4px;
    border-color: rgb(7, 12, 39);
    border-radius: 10px;
    background-color: rgb(13, 34, 71);
    opacity: 0.659;
    box-shadow: 0px 13px 76.44px 7.56px rgba(0, 0, 0, 0.78), inset 0 15px 20px, hex(#c9c6f1);
    height: 450px;
    border-color: solid 4px rgb(7, 12, 39);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    opacity: 0.8;
`;


  

const Name = styled.h2`
    font-family: 'Cinzel', serif;
    font-size: 1.7rem;
`;

const Info = styled.div`
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.2rem;
`;

const PersonCard = (props) => {
    return (
        <Card>
            <Name>{props.name}</Name>
                <Info>
                    {/* <p>Species: {props.species}</p> */}
                    <p>Gender: {props.gender.charAt(0).toUpperCase() + props.gender.slice(1)}</p>
                    {/* <p>Homeworld: {props.homeworld}</p> */}
                    <p>Year of Birth: {props.birthYear}</p>
                    <p>Height: {props.height} cm</p>
                    <p>Weight: {props.mass} kg</p>
                    <p>Hair Color: {props.hairColor}</p>
                    <p>Eye Color: {props.eyeColor}</p>
                    <p>Skin Color: {props.skinColor}</p>
                    {/* <p>Starships: {props.starships}</p>
                    <p>Vehicles: {props.vehicles}</p>
                    <p>Films: {props.films}</p> */}
            </Info>
        </Card>
    )
}

export default PersonCard;