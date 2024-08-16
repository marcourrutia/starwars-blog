import "./StartWarning.css";
import { useState } from "react";
import { FaLanguage } from "react-icons/fa6";

export const StartWarning = (props) => {
  const [language, setLanguage] = useState(true);

  return (
    <div className="start-warning-container">
      <span
        className="start-warning-span-language"
        onClick={() => setLanguage(!language)}
      >
        <FaLanguage />
      </span>
      <h2 className="start-warning-h2">
        {language ? "attention, jedi knight" : "atención, caballero jedi"}
      </h2>
      <p className="start-warning-p">
        {language ? (
          <>
            The introduction features sound effects
            <br />
            Please adjust your device's volume to avoid it being too loud
          </>
        ) : (
          <>
            La introducción presenta efectos sonoros
            <br />
            Ajusta el volumen de tu dispositivo para evitar que esté muy fuerte
          </>
        )}
      </p>
      <span
        className="start-warning-span"
        onClick={() => {
          props.setWarning(false);
        }}
      >
        {language ? "click to continue" : "click para continuar"}
      </span>
    </div>
  );
};
