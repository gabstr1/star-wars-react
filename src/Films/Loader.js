import "./Loader.css";

const Loader = () => {
  return (
    <div>
      <p className="loading-message">Loading...</p>
      <div className="loader">
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Loader;
