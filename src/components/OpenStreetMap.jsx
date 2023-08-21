import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, useMap, Popup, useMapEvent } from 'react-leaflet';
import L from 'leaflet';

// export function ChangeView({ coords }) {
//   const map = useMap();
//   map.setView(coords, 13)
// }

function MyComponent({ coords }) {
  const map = useMapEvent('click', () => {
    map.setView([50.5, 30.5], map.getZoom())
  })
  return null
}

export default function OpenStreetMap({params}) {
  const [geoData, setGeoData] = useState({ lat: params.lat, lng: params.long });

  const center = [params.lat, params.long];

  return (
    <MapContainer className='w-100 h-[50vh] rounded-lg' center={center} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {geoData.lat && geoData.lng && (
        <Marker
            icon={
                new L.Icon({
                    iconUrl: '/assets/images/point-mitra.png',
                    iconSize: [50, 50]
                })
            } 
            position={[geoData.lat, geoData.lng]} 
        >
            <Popup>
                <span className='font-bold'>Mitramedia Advertising</span>
            </Popup>
        </Marker>
      )}
      <MyComponent coords={center}/>
      {/* <ChangeView coords={center} /> */}
    </MapContainer>
  );
}
