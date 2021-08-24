import  {FC} from "react";
import "./Card.css";
import {FilmModel} from "../../utils/models"

interface CardProps{
  film: FilmModel,
  onShowPeopleHandler: (urls: string[], title: string) => void
}
const Card:FC<CardProps> = ({ film, onShowPeopleHandler }) => {
  const showPeopleHandler = (urls: string[]) => {
    onShowPeopleHandler(urls, film.title);
  };
  return (
    <div className="card">
      <div className="content">
        <div className="film-details">
          <h3>{film.title}</h3>
          <p>Release date: {film.releaseDate}</p>
          <p
            onClick={() => showPeopleHandler(film.characters)}
            className="button"
          >
            Show people
          </p>
        </div>
        <div className="episode-id">
          <p>{film.id}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
