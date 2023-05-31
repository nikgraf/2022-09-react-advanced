import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  defaultPosition: [number, number];
  zoom?: number;
};

const Map: React.FC<Props> = ({ zoom = 13, defaultPosition }) => {
  const element = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<null | Leaflet.Map>(null);

  useEffect(() => {
    let newMap: null | Leaflet.Map = null;
    if (element.current) {
      newMap = Leaflet.map(element.current, { zoomControl: false }).setView(
        defaultPosition,
        zoom
      );

      Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(newMap);

      setMap(newMap);
    }

    return () => {
      if (newMap) {
        newMap.remove();
        newMap = null;
      }
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (map) {
      map.setView(map.getCenter(), zoom);
    }
  }, [map, zoom]);

  return (
    <div
      ref={element}
      style={{ width: 600, height: 400, backgroundColor: "#ddd" }}
    />
  );
};

export default Map;
