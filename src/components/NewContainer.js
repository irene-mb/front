import React from 'react'
import {Map, Marker,InfoWindow, GoogleApiWrapper} from 'google-maps-react';
export class NewContainer extends React.Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}
       initialCenter={{
        lat:3.8609222,//this.props.latitude,
        lng:11.500996// this.props.longitude
      }}  
      >        
              <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
            </div>
        </InfoWindow>
                  
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
})(NewContainer)