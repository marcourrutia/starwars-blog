import { useEffect, useContext } from "react";
import { Context } from "../../store/context";
import { thePodRace } from "../../assets/music";

export const Starships = () => {
  const { actions } = useContext(Context);

  useEffect(() => {
    actions.setAmbientMusic(thePodRace);

    return () => {
      actions.setAmbientMusic(null);
    };
  }, []);

  return (
    <div>
      <h1></h1>
    </div>
  );
};
