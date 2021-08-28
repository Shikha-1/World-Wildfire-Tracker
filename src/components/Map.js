import React, {useState, Fragment} from 'react'
import GoogleMapReact from 'google-map-react';
import Marker from "./Marker";
import InfoCard from './Card';

const Map = ({ eventData, center, zoom }) => {
  const [openDrawer, setOpenDrawer] = useState(true);
  const [locationInfo, setLocationInfo] = useState();

  setTimeout(() => {
    setOpenDrawer(false);
  }, 5000);

  const markers = eventData.events.map((event) => {
    if (event.categories[0].id === 8) {
      return (
        <Marker
          key={event.id}
          lat={event.geometries[0].coordinates[1]}
          lng={event.geometries[0].coordinates[0]}
          text="Fire Marker"
          onClick={() => {
            setLocationInfo({ id: event.id, title: event.title })
            setOpenDrawer(true)
          }}
        />
      );
    }
    return null;
  });

  return (
    <Fragment>
      <GoogleMapReact
        style={{ width: "100wh", height: "calc(100vh-8vh)" }}
        bootstrapURLKeys={{ key: `${process.env.REACT_APP_MAP_KEY}` }}
        defaultCenter={center}
        defaultZoom={zoom}
        yesIWantToUseGoogleMapApiInternals
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && openDrawer && <InfoCard info={locationInfo}/>}
    </Fragment>
  );
}

Map.defaultProps = {
  center: {
    lat: 37.09024,
    lng: -95.712891,
  },
  zoom: 4,
};

export default Map;
