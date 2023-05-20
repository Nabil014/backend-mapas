import { GoogleMap } from '@react-google-maps/api'
import React from 'react'
const center = {
  lat: -12.0464,
  lng: -77.0428
}

const containerStyle = {
  width: '1920px',
  height: '969px'
}
const mapOptions = {
  zoom: 12,
  center: center
}

export const MapsContainer = () => {
  return (
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        options={mapOptions}
      ></GoogleMap>
    </>
  )
}
