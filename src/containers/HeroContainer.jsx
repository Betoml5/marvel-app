import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Hero from "../components/Hero";
import { find } from "../services/Hero";

const HeroContainer = () => {
  const dispatch = useDispatch();
  const heros = useSelector((state) => state.heros.state);
  console.log("heros", heros);

  useEffect(() => {
    find()
      .then((data) => {
        dispatch({
          type: "SET_ALL_HEROS",
          payload: data.data.results,
        });
      })
      .catch((e) => console.log(e));
  }, [dispatch]);

  return (
    <div>
      {heros?.map((hero) => (
        <Hero hero={hero} />
      ))}
    </div>
  );
};

export default HeroContainer;
