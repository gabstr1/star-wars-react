import "./PeopleTable.css";
import Loader from "./Loader";
import { useState } from "react";
import { useEffect } from "react";

const PeopleTable = (props) => {
  const [loadingTable, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const results = await Promise.all(
        props.urls.map(async (url) => {
          const resp = await fetch(url);
          const characters = await resp.json();
          return characters;
        })
      );
      setLoading(false);
      setCharacters(results);
    }
    fetchData();
  }, [props.urls]);

  let tableContent = <Loader />;

  if (loadingTable === false) {
    tableContent = (
      <div>
        <h4>
          People in <i>{props.filmTitle}</i>:
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
    );
  }

  return (
    <div className="container">
      <div className="table-container">{tableContent}</div>
    </div>
  );
};

export default PeopleTable;
