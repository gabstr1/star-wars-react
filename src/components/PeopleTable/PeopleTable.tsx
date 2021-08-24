import React, { useState, useEffect, FC } from "react";
import "./PeopleTable.css";
import Loader from "../Loader/Loader";
import {CharactersModel} from "../../utils/models"

interface PeopleTableProps {
  urls: string[]
  filmTitle: string
}

const PeopleTable:FC<PeopleTableProps> = ({ urls, filmTitle }) => {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState<CharactersModel[]>([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const results = await Promise.all(
        urls.map(async (url) => {
          const resp = await fetch(url);
          const characters = await resp.json();
          return characters;
        })
      );
      setLoading(false);
      setCharacters(results);
    }
    fetchData();
  }, [urls]);

  return (
    <div className="container">
      <div className="table-container">
        {loading ? (
          <Loader />
        ) : (
          <div>
            <h4>
              People in <i>{filmTitle}</i>:
            </h4>
            <table>
              <tbody>
                {characters.map((character, index) => (
                  <tr key={index}>
                    <td>
                      {index + 1}. {character.name}
                    </td>
                    <td>{character.gender}</td>
                    <td>{character.birth_year}</td>
                    <td>{character.mass}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default PeopleTable;
