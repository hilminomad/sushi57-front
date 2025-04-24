"use client"

import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useState } from 'react';

interface MapProps {
  location: {
    lat: number;
    lng: number;
  };
  zoom?: number;
  mapContainerStyle?: React.CSSProperties;
  markerLabel?: string;
  infoWindowContent?: string;
  showInfoWindow?: boolean;
}

const defaultMapContainerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '0.5rem',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
};

const RestaurantMap: React.FC<MapProps> = ({
  location,
  zoom = 15,
  mapContainerStyle = defaultMapContainerStyle,
  markerLabel = 'Our Restaurant',
  infoWindowContent = 'Welcome to our restaurant!',
  showInfoWindow = true,
}) => {
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(false);

  const toggleInfoWindow = () => {
    setIsInfoWindowOpen(!isInfoWindowOpen);
  };

  return (
    <div className="w-full">
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={location}
          zoom={zoom}
          options={{
            styles: [
              {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }],
              },
              {
                featureType: 'transit',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }],
              },
            ],
          }}
        >
          <Marker
            position={location}
            label={markerLabel}
            onClick={toggleInfoWindow}
          />
          {showInfoWindow && isInfoWindowOpen && (
            <InfoWindow
              position={location}
              onCloseClick={toggleInfoWindow}
            >
              <div className="p-2">
                <h3 className="font-bold text-lg">{markerLabel}</h3>
                <p className="text-gray-700">{infoWindowContent}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default RestaurantMap;