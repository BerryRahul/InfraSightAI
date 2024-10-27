import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import axios from "axios";

const MapComponent = () => {
  // Coordinates for Toronto
  const position = [43.6532, -79.3832];
  const [marker, setMarkers] = useState([]);
  const [insights, setInsights] = useState({}); // Store insights per tower ID

  useEffect(() => {
    const fetchMarkers = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:5000/get_last_entries"
        );
        setMarkers(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMarkers();
  }, []);

  // Function to fetch insights based on the tower ID
  const getInsight = async (towerId) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:5000/get_insight/${towerId}`
      );
      
      // Set insights for the specific tower ID
      setInsights(prevInsights => ({
        ...prevInsights,
        [towerId]: response.data.insights
      }));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex-grow h-screen overflow-hidden pt-16">
      <MapContainer
        center={position}
        zoom={12}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {marker.map((mark) => (
          <Marker position={[mark.lat, mark.lon]} key={mark.tower_id}>
            <Popup>
              <div>
                <strong>Tower ID:</strong> {mark.tower_id}
                <br />
                <strong>Downtime Duration:</strong> {mark.downtime_duration} mins
                <br />
                <strong>Temperature:</strong> {mark.temperature} °C
                <br />
                <strong>Humidity:</strong> {mark.humidity} %
                <br />
                <strong>Signal Strength:</strong> {mark.signal_strength}
                <br />
                <strong>Latency:</strong> {mark.latency} ms
                <br />
                <strong>Failure:</strong> {mark.tower_failure === 1 ? "Yes" : "No"}
                <br />
                <strong>GPT Insight:</strong> {insights[mark.tower_id] || "No insights available"}
                <br />
                <button onClick={() => getInsight(mark.tower_id)}>
                  Get Insight
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
