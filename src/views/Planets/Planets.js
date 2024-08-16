import { useEffect, useContext } from "react";
import { Context } from "../../store/context";
import { tatooineTheme } from "../../assets/music";
import { BackBtn, Loading } from "../../components";

export const Planets = (props) => {
  const { actions } = useContext(Context);

  useEffect(() => {
    actions.setAmbientMusic(tatooineTheme);

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
