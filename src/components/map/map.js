import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper, Polyline} from 'google-maps-react';
import SlidePannel from '../slide-panel'



import './map.css'

export class MapContainer extends Component {
  
  render() {

  	const coordsMajor = [
	   	{lat: 55.751244,lng: 37.618423},
	   	{lat: 50.4547, lng: 30.5238},

	    // {lat: 18.466, lng: -66.118},
	    // {lat: 32.321, lng: -64.757},
	    // {lat: 25.774, lng: -80.190}
  	];
  	const coordsMinor = [
	   	{lat: 55.751244,lng: 37.618423},
	   	{lat: 53.893009, lng: 27.567444},

	    // {lat: 18.466, lng: -66.118},
	    // {lat: 32.321, lng: -64.757},
	    // {lat: 25.774, lng: -80.190}
  	];

    return (
      <Map google={this.props.google} 
      	   style={{width: '100%', height: '100%', position: 'relative'}}
           className={'map'}
           zoom={3}
           initialCenter={{
	            lat: 55.751244,
	            lng: 37.618423
          }}
          >
        <SlidePannel/>
       	<Polyline
	          path={coordsMajor}
	          strokeColor="#ff0000"
	          strokeOpacity={0.8}
	          strokeWeight={3} 
        />	
 		<Polyline
	          path={coordsMinor}
	          strokeColor="#0077ff"
	          strokeOpacity={0.8}
	          strokeWeight={3} 
        />
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>"Hi there!"</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
  
}
 
export default GoogleApiWrapper({
  apiKey: ("mock")
})(MapContainer)
