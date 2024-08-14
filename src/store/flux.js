const getState = ({ getActions, getStore, setStore }) => {
  return {
    store: {
      ambientMusic: null,
    },
    actions: {
      setAmbientMusic: (music) => setStore({ ambientMusic: music }),
    },
  };
};

export default getState;
