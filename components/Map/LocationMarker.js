import { useEffect, useState } from "react";
const { Marker, Popup, useMapEvents } = require("react-leaflet");

export default function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    locationfound: (e) => {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  useEffect(() => {
    map.locate();
  }, [map]);

  return (
    position && (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
  );
}
