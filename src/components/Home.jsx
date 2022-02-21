import React, {useEffect, useState} from 'react';
import Card from './Card';
import axios from "axios";

const Home = ({query}) => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=6")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        // setPersons([...persons, ...response.results]); Luis lo pone asi pero tambien puede salir como lo pongo abajo
          setPersons(response.results);
      });
  }, []);

  const fetchPersons = async () => {
    // fetch("https://randomuser.me/api/")
    //   .then((response) => response.json())
    //   .then((response) => {
    //     console.log(response);
    //     setPersons([...persons, ...response.results]);
    //   });
    const response = await axios.get("https://randomuser.me/api/");
    console.log(response.data.results);
    setPersons([...persons, ...response.data.results]);
  };

   return (
    <div className="home-height d-flex align-items-center">
      <div className="container-fluid">
        <button onClick={fetchPersons} className="btn btn-primary mx-4">
          Agregar Persona
        </button>
        <div className="d-flex justify-content-around">
          {persons
            .filter((person) => person.name.first.toLowerCase().includes(query))
            .map((person) => {
              return (
                <Card
                  key={person.login.uuid}
                  foto={person.picture.medium}
                  nombre={person.name.first}
                  email={person.email}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
