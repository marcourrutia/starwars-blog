import { useContext, useEffect } from "react";
import { Context } from "../../store/context";
import { useGlobalAudioPlayer } from "react-use-audio-player";
import "./BackgroundMusic.css";
import { MdMusicNote, MdMusicOff } from "react-icons/md";

export const BackgroundMusic = () => {
  const { store, actions } = useContext(Context);
  const { load, pause, play, setVolume } = useGlobalAudioPlayer();

  useEffect(() => {
    if (store.ambientMusic) {
      load(store.ambientMusic, {
        loop: true,
        autoplay: store.ambientMusicPlay,
      });
      setVolume(0.4);
    }
  }, [store.ambientMusic]);

  const togglePlay = () => {
    if (store.ambientMusicPlay) {
      pause();
    } else {
      play();
    }
    actions.setAmbientMusicPlay(!store.ambientMusicPlay);
  };

  return (
    <button
      className="btn-music btn btn-outline-warning foreground"
      onClick={togglePlay}
    >
      {store.ambientMusicPlay ? <MdMusicNote /> : <MdMusicOff />}
    </button>
  );
};
