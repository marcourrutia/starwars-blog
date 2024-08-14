import { useState, useContext, useEffect } from "react";
import { Context } from "../../store/context";
import { useGlobalAudioPlayer } from "react-use-audio-player";
import "./BackgroundMusic.css";
import { MdMusicNote, MdMusicOff } from "react-icons/md";
import { starwarsintro } from "../../assets/music";

export const BackgroundMusic = () => {
  const { store, actions } = useContext(Context);
  const [isPlaying, setIsPlaying] = useState(true);
  const { load, pause, play } = useGlobalAudioPlayer();

  useEffect(() => {
    load(store.ambientMusic, {
      autoplay: true,
      loop: true,
    });
  }, [store.ambientMusic]);

  const togglePlay = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      className="btn-music btn btn-outline-warning foreground"
      onClick={togglePlay}
    >
      {isPlaying ? <MdMusicNote /> : <MdMusicOff />}
    </button>
  );
};
