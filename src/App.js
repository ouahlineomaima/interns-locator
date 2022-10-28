import { React, useState } from "react";
import "./App.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import software_pfe from "./data/software_pfe.json";

import MiniDrawer from "./MiniDrawer";

function App() {
  const [activeAlumani, setActiveAlumani] = useState(null);
  const [alumaniData, setAlumaniData] = useState(software_pfe);
 
  return (
    <>
      <MiniDrawer
        onChange={(object) => {
          if (object) {
            setAlumaniData(object);
          }
        }}
      />
      {/* dark map */}
      <MapContainer
        center={[31.1728205, -7.3362482]}
        zoom={5}
        scrollWheelZoom={true}
        maxZoom={17}
        minZoom={3}
      >
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        />

        {alumaniData.map((eachData) => (
          <Marker
            position={[eachData.latitude, eachData.longitude]}
            eventHandlers={{
              click: () => {
                setActiveAlumani(eachData);
              },
            }}
          />
        ))}

        {activeAlumani && (
          <Popup
            position={[activeAlumani.latitude, activeAlumani.longitude]}
            onClose={() => {
              setActiveAlumani(null);
            }}
          >
            <div>
              <h1>Interns-Locator</h1>
              <p>Location: {activeAlumani.location}</p>

              <div>
                {Object.keys(activeAlumani.company_count).map((key, index) => (
                  <p key={index}>
                    {" "}
                    {key} : {activeAlumani.company_count[key]}
                  </p>
                ))}
              </div>
            </div>
          </Popup>
        )}
      </MapContainer>
    </>
  );
}

export default App;
