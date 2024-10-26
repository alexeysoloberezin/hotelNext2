import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '500px',
};

const center = {
  lat: -34.397,  // Укажите ваши координаты широты
  lng: 150.644,  // Укажите ваши координаты долготы
};

const customIcon = {
  url: "https://example.com/path-to-your-icon.png",  // URL иконки
  scaledSize: new window.google.maps.Size(50, 50),  // Размер иконки
};

function GoogleMap(props) {
  return (
    <div>
      <LoadScript googleMapsApiKey="YOUR_API_KEY">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={8}
        >
          <Marker
            position={center}
            icon={customIcon}  // Указываем кастомную иконку
          />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default GoogleMap;