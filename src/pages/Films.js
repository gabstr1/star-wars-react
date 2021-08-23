// import "./App.css";
import "./Films.css";
import Card from "../Films/Card";
import PeopleTable from "../Films/PeopleTable";
import { useEffect } from "react";

import React, { useState } from "react";

const Films = () => {
  const [films, setFilms] = useState([]);
  const [urls, setCharacterUrls] = useState([]);
  const [filmTitle, setFilmTitle] = useState([]);
  const [showTable, setTableVisibility] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://swapi.dev/api/films");
      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }
      const data = await response.json();
      const transformedFilms = data.results.map((filmData) => {
        return {
          id: filmData.episode_id,
          title: filmData.title,
          releaseDate: filmData.release_date,
          characters: filmData.characters,
        };
      });
      setFilms(transformedFilms);
    }
    fetchData();
  }, []);

  let peopleTableContent = (
    <p className="table-content">
      Press <i>Show people</i> button to see people.
    </p>
  );

  const showPeopleHandler = async (urls, filmTitle) => {
    setTableVisibility(false);
    setCharacterUrls(urls);
    setFilmTitle(filmTitle);
    setTableVisibility(true);
  };

  if (showTable) {
    peopleTableContent = <PeopleTable filmTitle={filmTitle} urls={urls} />;
  }

  return (
    <div className="main-container">
      <div className="films-container">
        {films.map((film, index) => (
          <Card
            film={film}
            key={index}
            onShowPeopleHandler={showPeopleHandler}
          />
        ))}
      </div>
      <div>{peopleTableContent}</div>
    </div>
  );
};

export default Films;
