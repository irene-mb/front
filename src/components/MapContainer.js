import React from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
export class MapContainer extends React.Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}
       initialCenter={{
        lat:this.props.adminLa,
        lng: this.props.adminLo
      }}  
      >        
                {/* <Marker
                  name={this.props.admin}
                  position={{lat:this.props.adminLa, lng: this.props.adminLo}} /> 
                <Marker
                  name={this.props.user}
                  position={{lat:3.8661, lng:11.5154}} />
                  */}
                 <Marker
                    title={'The Administrator'}
                    name={this.props.admin}
                    position={{lat: this.props.adminLa, lng: this.props.adminLo}} />
                    
                  <Marker
                    title={this.props.user}
                    name={this.props.user}
                    position={{lat: this.props.userLa , lng: this.props.userLo}} /> 
                 {/*  <Marker
                    name={this.props.user}
                    position={{lat: 3.880088, lng: 11.524749}} /> */}
                  
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
})(MapContainer)