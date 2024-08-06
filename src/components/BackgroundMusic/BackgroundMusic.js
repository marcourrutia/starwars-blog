import { useRef, useState } from "react";
import "./BackgroundMusic.css";
import { MdMusicNote, MdMusicOff } from "react-icons/md";

export const BackgroundMusic = (props) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} autoPlay>
        <source src={props.music} type="audio/mp3" />
      </audio>
      <button
        className="btn-music btn btn-outline-warning"
        onClick={togglePlay}
      >
        {isPlaying ? <MdMusicNote /> : <MdMusicOff />}
      </button>
    </>
  );
};
