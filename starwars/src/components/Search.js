import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import './App.css';
import "../components/Search";


class Search extends Component {
    token = null;
    state = {
      query: "",
      people: []
    };
  
    onChange = e => {
      const { value } = e.target;
      this.setState({
        query: value
      });
  
      this.search(value);
    };
  
    search = query => {
      const url = `https://swapi.co/api/people?search=${query}`
      const token = {};
      this.token = token;
  
      fetch(url)
        .then(results => results.json())
        .then(data => {
          if (this.token === token) {
            this.setState({ people: data.results });
          }
        });
    };

    componentDidMount() {
        this.search("");
      }
    
      class Posts extends Component {
        render() {
          return (
          <form>
            <input
              type="text"
              className="search-box"
              placeholder="Search for..."
              onChange={this.onChange}
            //   class Search extends Component {
            //     token = null;
            //     state = {
            //       query: "",
            //       people: []
    }           
                };
              
                onChange = e => {
                  const { value } = e.target;
                  this.setState({
                    query: value
                  });
              
                  this.search(value);
                };
              
                search = query => {
                  const url = `https://swapi.co/api/people?search=${query}`;
                  const token = {};
                  this.token = token;
              
                  fetch(url)
                    .then(results => results.json())
                    .then(data => {
                      if (this.token === token) {
                        this.setState({ people: data.results });
                      }
                    });
                };
              
                componentDidMount() {
                  this.search("");
                }
              
            class Posts extends Component {
                render() {
                  return (
                    <form>
                      <input
                        type="text"
                        className="search-box"
                        placeholder="Search for..."
                        onChange={this.onChange}
                      />
                      {this.state.people.map(person => (
                        <ul key={person.name}>
                          <li>{person.name}</li>
                        </ul>
                      ))}
                    </form>
                  );
                }
              }
            //begin map
            />
            {this.state.people.map(person => (
              <ul key={person.name}>
                <li>{person.name}</li>
              </ul>
            ))}
          </form>
        );
      }
    }
    
    export default Search;
