import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styled from "styled-components";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const StyledMapContainer = styled(MapContainer)`
  height: 30rem;
  width: 50rem;
  margin: 0 auto;
`;

export default function Map({ markers }) {
  return (
    <StyledMapContainer center={[50.123, 8.234]} zoom={12} scrollWheelZoom>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker) => {
        return (
          <Marker key={marker.id} position={[marker.lat, marker.long]}>
            <Popup>
              <h2>{marker.name}</h2>
              <p>This is a very interesting spot</p>
            </Popup>
          </Marker>
        );
      })}
    </StyledMapContainer>
  );
}
