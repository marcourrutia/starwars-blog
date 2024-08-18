import { useEffect, useState } from "react";

export function useImageLoader(baseUrl, data) {
  const [imgUrls, setimgUrls] = useState([]);
  const [imgLoading, setImgLoading] = useState(true);

  useEffect(() => {
    if (!data || data.length === 0) return;

    // Crear las URLs basadas en los IDs
    const urls = data.map((item) => `${baseUrl}/${item.id}.jpg`);
    setimgUrls(urls);

    let loadedCount = 0;

    // Verificar si todas las imágenes están cargadas
    const handleImageLoad = () => {
      loadedCount += 1;
      if (loadedCount === urls.length) {
        setImgLoading(false);
      }
    };

    // Crear un array de imágenes para rastrear su estado de carga
    urls.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = handleImageLoad;
    });

    return () => {
      // Limpiar cualquier referencia a las imágenes si el componente se desmonta
      setImgLoading(false);
    };
  }, [baseUrl, data]);

  return { imgUrls, imgLoading };
}
