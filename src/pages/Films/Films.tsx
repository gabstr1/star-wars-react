import React, { useState, useEffect, FC } from "react";

import "./Films.css";
import Card from "../../components/Card/Card";
import PeopleTable from "../../components/PeopleTable/PeopleTable";
import { FilmDataModel } from "../../utils/models";
import { API_FILM_URL } from "../../utils/constants";


const Films:FC = () => {
  const [films, setFilms] = useState([]);
  const [urls, setCharacterUrls] = useState<string[]>([]);
  const [filmTitle, setFilmTitle] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(API_FILM_URL);
      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }
      const data = await response.json();
      const transformedFilms = data.results.map((filmData: FilmDataModel) => {
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

  const showPeopleHandler = async (urls: string[], filmTitle: string) => {
    setCharacterUrls(urls);
    setFilmTitle(filmTitle);
  };

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
      <div>
        {urls.length > 0 ? (
          <PeopleTable filmTitle={filmTitle} urls={urls} />
        ) : (
          <p className="table-content">
            Press <i>Show people</i> button to see people.
          </p>
        )}
      </div>
    </div>
  );
};

export default Films;
