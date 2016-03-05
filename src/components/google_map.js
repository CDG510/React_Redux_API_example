import React, { Component } from 'react'

import { GoogleMapLoader, GoogleMap} from "react-google-maps"

export default (props) => {
  console.log('props', props)
  return (
      <GoogleMapLoader
        containerElement={ <div style={{height: "100%"}} />}
        googleMapElement={
          <GoogleMap
            ref={(map) => console.log('map', map)}
            defaultCenter={{ lat: props.lat, lng:props.lon}}
            defaultZoom={12}/>
      }/>
  )
}
