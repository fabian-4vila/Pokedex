import { useRef } from "react";
import { setTrainerSlice } from "../store/slices/trainer.slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const inputTrainer = useRef();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleTrainer = (e) => {
    e.preventDefault();
    dispatch(setTrainerSlice(inputTrainer.current.value.trim()));
    navigate("/pokedex");
  };

  return (
    <article className="pokedex">
      <header className="pokedex__title1">
      <img
        className="pokedex__title_image"
        src="/images/TitleHome.png"
        alt="pokedex title"
      />
      </header>
      <div className="pokedex__body">
      <h2 className="pokedex__title2">Hi Trainer!</h2>
      <p className="pokedex__instructions">
        To start, please, enter your trainer name
      </p>
      <form className="pokedex__form" onSubmit={handleTrainer}>
        <input className="pokedex__input" ref={inputTrainer} type="text" />
        <button className="pokedex__button">Start!</button>
      </form>
      </div>
      <footer className="pokedex__footer">
        <img
          className="pokedex__footer-image"
          src="/images/footer.png"
          alt="Pokedex footer"
        />
      </footer>
    </article>
  );
};

export default HomePage;
