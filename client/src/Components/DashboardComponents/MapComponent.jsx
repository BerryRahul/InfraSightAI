import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Set up default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: import('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: import('leaflet/dist/images/marker-icon.png'),
  shadowUrl: import('leaflet/dist/images/marker-shadow.png'),
});

const MapComponent = () => {
  // Coordinates for Toronto
  const position = [43.6532, -79.3832]; 

  return (
    <div className="flex-grow h-screen overflow-hidden pt-16">
      <MapContainer center={position} zoom={12} style={{ width: '100%', height: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            This is a marker at the specified coordinates.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
