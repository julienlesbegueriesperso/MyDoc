import { Box, IconButton, Tooltip as MaterialToolTip } from '@mui/material';
import { GeoJsonObject } from 'geojson';
import L, { LatLngBoundsExpression, LatLngExpression, Map as LeafletMap, Point } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './Map.module.css';
import React, { useRef } from 'react'
import { MapContainer, TileLayer, Marker, GeoJSON, Tooltip, LayerGroup, SVGOverlay } from "react-leaflet"
import pathSubway from '../../../static/map/pathSubway.json'
// import parkingIcon from './parkingIcon.svg'
// import iconPMR from './iconPMR.svg'
import Control from 'react-leaflet-custom-control';
import CenterFocusStrongIcon  from '@mui/icons-material/CenterFocusStrong';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const iconParking = new L.Icon({
  iconUrl: "./map/parkingIcon.svg",//parkingIcon,
  // iconRetinaUrl: require('../img/marker-pin-person.svg'),
  iconSize: new L.Point(30, 30),
  className: 'leaflet-div-icon'
});

const markerIcon = new L.Icon({
  iconUrl: './map/logo_dermato_minimes.svg',
  iconSize: new L.Point(30, 30),
  className: 'leaflet-div-icon'
});


const iconParkingPMR = new L.Icon({
  iconUrl: "./map/iconPMR.svg",
  iconSize: new L.Point(20, 20),
  className: 'leaflet-div-icon'
});

export function Map() {
    const position:LatLngExpression = [43.626602, 1.435551]
    const mapRef = useRef<LeafletMap>(null)

    const fitView = () => {
      if (mapRef.current) {
        mapRef.current.flyTo(position, 17)
      }
    }
    

    return(
      <Box className={styles["box_map_container"]} height={'30vh'}>
      <MapContainer  center={position} zoom={17} 
      maxZoom={18} minZoom={15}
      ref={mapRef}
      scrollWheelZoom={true} bounceAtZoomLimits={true} style={{height:'30vh'}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={markerIcon}>
          <Tooltip permanent direction='right' offset={new Point(20, 0)}>
            <h5>Cabinet de Dermatologie des Minimes</h5>
            <p>132bis Bd Pierre et Marie Curie,
               <br/>31200 Toulouse</p>
          </Tooltip>
        </Marker>
        <LayerGroup>
        <GeoJSON key={'t'} data={pathSubway as GeoJsonObject} style={{color:'orange', weight:5 }}>
          <Tooltip>Itinéraire depuis le métro<br/>Barrière de Paris</Tooltip>
        </GeoJSON>
        {/* <SVGOverlay bounds={pathBounds}>
            <path>M 0 0 L 5 2</path>
        </SVGOverlay> */}
        <Marker position={[43.626528, 1.434514] as LatLngExpression} opacity={0.8} icon={iconParking}>
          <Tooltip>
            Parking du Casino
          </Tooltip>
        </Marker>
        <Marker position={[43.626733, 1.432474] as LatLngExpression} opacity={0.8} icon={iconParking}>
          <Tooltip>
            Parking du Carrefour Market
          </Tooltip>
        </Marker>
        <Marker position={[43.627381, 1.433571] as LatLngExpression} opacity={0.8} icon={iconParkingPMR}>
          <Tooltip>
            Parking PMR
          </Tooltip>
        </Marker>
        <Marker position={[43.627500, 1.433857] as LatLngExpression} opacity={0.8} icon={iconParkingPMR}>
          <Tooltip>
            Parking PMR
          </Tooltip>
        </Marker>
        <Marker position={[43.627201, 1.435451] as LatLngExpression} opacity={0.8} icon={iconParkingPMR}>
          <Tooltip>
            Parking PMR
          </Tooltip>
        </Marker>
        </LayerGroup>
        <Control position='topright'>
        <Box sx={{background: 'white', opacity:0.7}}>
        <MaterialToolTip title='Retrouver le centre'>
        <IconButton color='info' onClick={fitView} 
        >          
          <CenterFocusStrongIcon  color='info'></CenterFocusStrongIcon>
        </IconButton>
        </MaterialToolTip>
        </Box>
        </Control>
      </MapContainer>
      </Box>
    )
}

export default Map