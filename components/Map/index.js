import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styled from "styled-components";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import LocationMarker from "./LocationMarker";

const StyledMapContainer = styled(MapContainer)`
  height: 30rem;
  width: 50rem;
  margin: 0 auto;
`;

const goldIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function Map({ markers }) {
  return (
    <StyledMapContainer center={[50.123, 8.234]} zoom={12} scrollWheelZoom>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker) => {
        return (
          <Marker
            key={marker.id}
            position={[marker.lat, marker.long]}
            icon={goldIcon}
          >
            <Popup>
              <h2>{marker.name}</h2>
              <p>This is a very interesting spot</p>
            </Popup>
          </Marker>
        );
      })}
      <LocationMarker />
    </StyledMapContainer>
  );
}
