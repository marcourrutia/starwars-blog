const getState = ({ getActions, getStore, setStore }) => {
  return {
    store: {
      ambientMusic: null,
      ambientMusicPlay: true,
      homeVisible: false,
      url: null,
      itemImg: null,
      loadMusic: null,
    },
    actions: {
      setAmbientMusic: (music) => setStore({ ambientMusic: music }),
      setAmbientMusicPlay: (isPlaying) =>
        setStore({ ambientMusicPlay: isPlaying }),
      setHomeVisible: (isVisible) => setStore({ homeVisible: isVisible }),
      setUrl: (url) => setStore({ url: url }),
      setItemImg: (value) => setStore({ itemImg: value }),
      setLoadMusic: (music) => setStore({ loadMusic: music }),
    },
  };
};

export default getState;
