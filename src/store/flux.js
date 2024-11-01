const getState = ({ getActions, getStore, setStore }) => {
  return {
    store: {
      ambientMusic: null,
      ambientMusicPlay: true,
      homeVisible: false,
      url: null,
      itemImg: null,
      loadMusic: null,
      currentPage: 1,
      favorites: JSON.parse(localStorage.getItem("favorites")) || [],
    },
    actions: {
      setAmbientMusic: (music) => setStore({ ambientMusic: music }),
      setAmbientMusicPlay: (isPlaying) =>
        setStore({ ambientMusicPlay: isPlaying }),
      setHomeVisible: (isVisible) => setStore({ homeVisible: isVisible }),
      setUrl: (url) => setStore({ url: url }),
      setItemImg: (value) => setStore({ itemImg: value }),
      setLoadMusic: (music) => setStore({ loadMusic: music }),
      setCurrentPage: (value) => setStore({ currentPage: value }),

      toggleFavorite: (item) => {
        const store = getStore();
        const isFavorite = store.favorites.some(
          (fav) => fav.uid === item.uid && fav.category === item.category
        );

        const updatedFavorites = isFavorite
          ? store.favorites.filter(
              (fav) => fav.uid !== item.uid || fav.category !== item.category
            )
          : [...store.favorites, item];

        setStore({ favorites: updatedFavorites });
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      },
    },
  };
};

export default getState;
