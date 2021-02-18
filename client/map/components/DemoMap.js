import React, { Component } from "react";
import { 
  Map, 
  TileLayer, 
  CircleMarker, 
  Popup 
} from "react-leaflet";
import {
  attribution,
  tileUrl,
  defaultMapState,
  myLocation,
  cities
} from './utils/Utils';
import { DemoMapTooltip, CityMapTooltip } from "./DemoMapTooltip";


export default class DemoMap extends Component {
  constructor() {
    super();
    this.state = myLocation;

  }
  
  render() {
    const cityMarkers = [];
    cities.forEach((city, idx) => cityMarkers.push(
      <CircleMarker 
          key={`mountain-${city.id}`}
          color='black'
          radius={15}
          weight={2}
          onClick={() => { 
              this.setState({ activeCity: city });
          }}
          center={city.point}
          >
    </CircleMarker>
    ));

    return this.props.cities ? (
      <div >
      
        <Map
          center={[this.state.lat, this.state.lng]}
          zoom={this.state.zoom}
          style={{ width: "50%", position: "relative"}}
          updateWhenZooming={false}
          updateWhenIdle={true}
          preferCanvas={true}
          minZoom={this.state.minZoom}
        >
        <TileLayer
            attribution={attribution}
            url={tileUrl}
        />
        {cityMarkers}

        {this.state.activeCity && <Popup
          position={this.state.activeCity.point}
          onClose={() => {
              this.setState({ activeCity: null })
          }}
        >
          <CityMapTooltip
            city={this.state.activeCity}
          />
        </Popup>}
      </Map>
    </div>
  ) : (
      "Data is loading..."
  );
  }
}


// export default class DemoMap extends Component {
//     state = defaultMapState;

//     render() {
//       console.log('Demo Map state', this.state)
//         return this.props.mountains ? (
//         <Map
//             center={[this.state.lat, this.state.lng]}
//             zoom={this.state.zoom}
//             style={{ width: "100%", position: "absolute", top: 0, bottom: 0, zIndex: 500, }}
//             updateWhenZooming={false}
//             updateWhenIdle={true}
//             preferCanvas={true}
//             minZoom={this.state.minZoom}
//         >
//             <TileLayer
//                 attribution={attribution}
//                 url={tileUrl}
//             />
//             {this.props.mountains.map((mountain, idx) => 
//                 <CircleMarker 
//                     key={`mountain-${mountain.id}`}
//                     color='black'
//                     radius={15}
//                     weight={2}
//                     onClick={() => { 
//                         this.setState({ activeMountain: mountain });
//                     }}
//                     center={mountain.point}>
//                 </CircleMarker>
//             )}
//             {this.state.activeMountain && <Popup
//                 position={this.state.activeMountain.point}
//                 onClose={() => {
//                     this.setState({ activeMountain: null })
//                 }}
//             >
//                 <DemoMapTooltip
//                     mountain={this.state.activeMountain}
//                 />
//             </Popup>}
//         </Map>
//         ) : (
//             "Data is loading..."
//         );
//     }
// }