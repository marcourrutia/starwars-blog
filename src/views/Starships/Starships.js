import { useEffect, useContext } from "react";
import { Context } from "../../store/context";
import { thePodRace } from "../../assets/music";
import { BackBtn, Loading } from "../../components";

export const Starships = () => {
  const { actions } = useContext(Context);

  useEffect(() => {
    actions.setAmbientMusic(thePodRace);

    return () => {
      actions.setAmbientMusic(null);
    };
  }, []);

  return (
    <>
      <BackBtn />
      <Loading />
    </>
  );
};
