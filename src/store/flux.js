const getState = ({ getActions, getStore, setStore }) => {
  return {
    store: {
      ambientMusic: null,
      ambientMusicPlay: true,
      homeVisible: false,
    },
    actions: {
      setAmbientMusic: (music) => setStore({ ambientMusic: music }),
      setAmbientMusicPlay: (isPlaying) =>
        setStore({ ambientMusicPlay: isPlaying }),
      setHomeVisible: (isVisible) => setStore({ homeVisible: isVisible }),
    },
  };
};

export default getState;
