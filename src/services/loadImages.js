export const loadImages = (data, url) => {
  const imageIds = data.map((item) => item.uid); // Obteniendo los IDs del array
  const urls = imageIds.map((id) => `${url}${id}.jpg`);

  // Crea un array de promesas para verificar si las imágenes están cargadas
  const imagePromises = urls.map((url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = resolve; // Resuelve cuando la imagen se carga
      img.onerror = reject; // Rechaza si hay un error al cargar la imagen
    });
  });

  return Promise.all(imagePromises);
};
