import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import style from "./mapComponent.module.css";
import "leaflet/dist/leaflet.css";
export default function MapComponent() {
  const position = [10.1076, 76.3516];
  const familyLocations = [
    { id: 1, name: "Aadhil", position: [10.1074, 76.3484] },
    { id: 2, name: "Rinsha", position: [10.1016494, 76.3315447] },
    { id: 3, name: "John", position: [10.1076, 76.3516] },
  ];
  return (
    <div className={style.mapContainer}>
      <MapContainer center={position} zoom={13} className={style.mapContainer}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {familyLocations.map((member)=>(
        <Marker key={member.id} position={member.position}>
        <Popup>{member.name}'s Location</Popup>
      </Marker>))}
        
      </MapContainer>
    </div>
  );
}
