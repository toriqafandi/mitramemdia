import { Fragment, useCallback, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, useMap, Popup } from 'react-leaflet';
import L from 'leaflet';

export function ChangeView({ coords }) {
  const map = useMap();
  map.setView(coords, 13);
  return null;
}

export default function OpenStreetMap(params) {
  const [geoData, setGeoData] = useState(params);
  const centerLoc = [geoData.lat, geoData.lng];

  return (
    <>
    <MapContainer center={centerLoc} zoom={false} className='rounded-lg z-0' style={{ height: '50vh' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
        <Marker 
          position={[geoData.lat, geoData.lng]} 
          icon={
            new L.Icon({
              iconUrl: '/assets/images/point-mitra.png',
              iconSize: [50, 50]
            })
          } 
        >
        </Marker>
      <ChangeView coords={centerLoc} />
    </MapContainer>
    </>
  );
}
