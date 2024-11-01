import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../store/context";
import { useFetch } from "../../services";
import { BackBtn, Loading } from "../../components";
import "./ItemDetail.css";
import imgNotFound from "../../assets/images/img-not-found.webp";

export const ItemDetail = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  const [itemData, setItemData] = useState(null);
  const { data, loading } = useFetch(
    `https://www.swapi.tech/api/${store.url}/${id}`
  );

  useEffect(() => {
    const fetchAdditionalData = async (url) => {
      const response = await fetch(url);
      const additionalData = await response.json();
      return {
        name: additionalData.result.properties.name,
        uid: additionalData.result.uid,
      };
    };

    const processItemData = async () => {
      if (data) {
        const properties = data.result.properties;
        const filteredProperties = Object.entries(properties).filter(
          ([key]) => !["created", "edited", "url", "name"].includes(key)
        );

        const processedData = await Promise.all(
          filteredProperties.map(async ([key, value]) => {
            if (key === "pilots" && Array.isArray(value) && value.length > 0) {
              const pilotsData = await Promise.all(
                value.map((pilotUrl) => fetchAdditionalData(pilotUrl))
              );
              return [key, pilotsData];
            } else if (
              key === "homeworld" &&
              typeof value === "string" &&
              value
            ) {
              const homeworldData = await fetchAdditionalData(value);
              return [key, homeworldData];
            } else {
              return [key, value];
            }
          })
        );

        setItemData(Object.fromEntries(processedData));
      }
    };

    processItemData();
  }, [data]);

  const handleClick = (key, name, uid) => {
    if (key === "pilots") {
    } else if (key === "homeworld") {
    }
  };

  return (
    <div className="item-details-container">
      <BackBtn />
      {loading ? (
        <Loading />
      ) : (
        <div className="item-details-info">
          <img
            src={`https://starwars-visualguide.com/assets/img/${store.itemImg}/${data?.result.uid}.jpg`}
            onError={(e) => (e.target.src = imgNotFound)}
          />
          <div className="foreground">
            <h1>{data?.result.properties.name}</h1>
            <ul>
              {itemData &&
                Object.entries(itemData).map(([key, value]) => (
                  <li key={key}>
                    {key === "pilots" || key === "homeworld" ? (
                      <>
                        <strong>{key.replace(/_/g, " ")}:</strong>{" "}
                        {Array.isArray(value) ? (
                          <ul>
                            {value.map(({ name, uid }, index) => (
                              <li
                                key={index}
                                onClick={() => handleClick(key, name, uid)}
                                className="clickeable"
                              >
                                {name}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <ul>
                            <li
                              onClick={() =>
                                handleClick(key, value.name, value.uid)
                              }
                              className="clickeable"
                            >
                              {value.name}
                            </li>
                          </ul>
                        )}
                      </>
                    ) : (
                      <>
                        <strong>{key.replace(/_/g, " ")}:</strong> {value}
                      </>
                    )}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
