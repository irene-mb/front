import React, { Component } from "react";

import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';


const mapStyles = {

  width: '100%',

  height: '100%'

};


class Demo1 extends Component {

  constructor() {

    super();

    this.state = {

      name: "React"

    };

  }


  render() {

    return (

      <div>
         
        <Map

          google={this.props.google}

          zoom={14}

          style={mapStyles}

          initialCenter={{

            lat: 3.8661,

            lng:  11.5154

          }}

        >

         <Marker

          onClick={this.onMarkerClick}

          name={'This is test name'}

        />

        </Map>
      </div>

    );

  }

}


export default GoogleApiWrapper({

  apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'

})(Demo1);