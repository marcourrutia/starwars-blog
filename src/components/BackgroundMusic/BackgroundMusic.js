import { useRef, useState, useEffect } from "react";
import "./BackgroundMusic.css";
import { MdMusicNote, MdMusicOff } from "react-icons/md";

export const BackgroundMusic = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.play().catch((error) => {
        console.log("Autoplay was prevented:", error);
      });
    }
  }, []);

  return (
    <>
      <audio ref={audioRef} autoPlay loop>
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
