import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import './App.css';
import PersonCard from "./PersonCard";
//import Search from "./components/Search";




const Header = styled.h1`
  text-shadow: 11px 0px 12px rgba(201, 198, 241, 0.004);
  font-family: 'acme-gothic-extrawide', serif;
  font-weight: 800;
  font-size: 5rem;
  margin: 2% 0 2%;
  text-transform: uppercase;
  letter-spacing: 4px;
  overflow: hidden;
  background-repeat: no-repeat;
  
  -webkit-filter: drop-shadow(9px 5px 5px #222);
  -webkit-background-image: text;
  -webkit-text-fill-color: 2821f2;
  
`;

const PersonContainer = styled.div`
  margin: 2% 2%;
  display: grid;
  grid-gap: 125px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const Info = styled.div`
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.2rem;
`;


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [people, setPeople] = useState([]);
  const [filterPeople, setFilterPeople] = useState([])
  const [text, setText] = useState("");

  const handlefilter = event => {
    const newText = event.target.value;
    setText(newText);
    if (newText) {
      const result = people.filter(person => {
        const first = person.name.toLowerCase();
        const second = newText.toLowerCase();
        console.log(first, " ", second);
        return first.search(second) > -1;
      });

      setFilterPeople(result.length ? result : people);
    } else {
      setFilterPeople(people);
    }
  }

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get("https://swapi.co/api/people/").then((response) => {
      setPeople(response.data.results);
      setFilterPeople(response.data.results);
      //console.log(response.data.results);
    }).catch((error) => {
      console.log("The data was not returned.", error);
    })
  }, [])

  return (
    
    <div className="App">
       <Header>React Wars</Header>
        <input 
          value = {text}
          onChange = {handlefilter}
          placeholder = "Search"
        />
      <PersonContainer> 
        {filterPeople.map((char, index) => {
          
              return (
                <PersonCard
                  key={index}
                  name={char.name}
                  species={char.species}
                  gender={char.gender}
                  homeworld={char.homeworld}
                  birthYear={char.birth_year}
                  height={char.height}
                  mass={char.mass}
                  hairColor={char.hair_color}
                  eyeColor={char.eye_color}
                  skinColor={char.skin_color}
                  starships={char.starships}
                  vehicles={char.vehicles}
                  films={char.films}
                />)
        })}
      </PersonContainer>
    </div>
    
  );
}

export default App;