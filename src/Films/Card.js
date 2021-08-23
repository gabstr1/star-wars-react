import "./Card.css";

const Card = (props) => {
  const showPeopleHandler = (urls) => {
    props.onShowPeopleHandler(urls, props.film.title);
  };
  return (
    <div className="card">
      <div className="content">
        <div className="film-details">
          <h3>{props.film.title}</h3>
          <p>Release date: {props.film.releaseDate}</p>
          <p
            onClick={() => showPeopleHandler(props.film.characters)}
            className="button1"
          >
            Show people
          </p>
        </div>
        <div className="episode-id">
          <p>{props.film.id}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
